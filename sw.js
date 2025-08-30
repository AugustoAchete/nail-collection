// Service Worker com Background Sync, Push Notifications e Periodic Sync
const CACHE_NAME = 'nail-collection-v2';
const STATIC_CACHE = 'nail-static-v2';
const DYNAMIC_CACHE = 'nail-dynamic-v2';

// Arquivos essenciais para cache
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  console.log('[SW] Instalando Service Worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('[SW] Pré-cacheando arquivos estáticos');
        return cache.addAll(STATIC_FILES);
      })
      .catch(err => console.error('[SW] Erro no cache:', err))
  );
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  console.log('[SW] Ativando Service Worker...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Garante que o SW controle todas as páginas imediatamente
  return self.clients.claim();
});

// Estratégia de Cache - Network First com Fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requisições que não são do nosso domínio
  if (url.origin !== location.origin) {
    return;
  }

  // Para requisições de API ou dados dinâmicos
  if (request.url.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          return caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request.url, response.clone());
            return response;
          });
        })
        .catch(() => {
          return caches.match(request);
        })
    );
    return;
  }

  // Para arquivos estáticos - Cache First
  event.respondWith(
    caches.match(request)
      .then(response => {
        if (response) {
          // Atualizar cache em background
          fetch(request).then(fetchResponse => {
            caches.open(STATIC_CACHE).then(cache => {
              cache.put(request, fetchResponse);
            });
          });
          return response;
        }
        
        return fetch(request).then(fetchResponse => {
          return caches.open(DYNAMIC_CACHE).then(cache => {
            cache.put(request.url, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
      .catch(() => {
        // Página offline como fallback
        if (request.destination === 'document') {
          return caches.match('/offline.html');
        }
      })
  );
});

// Background Sync - Sincronizar dados quando voltar online
self.addEventListener('sync', event => {
  console.log('[SW] Background Sync iniciado');
  
  if (event.tag === 'sync-polishes') {
    event.waitUntil(syncPolishes());
  }
  
  if (event.tag === 'sync-images') {
    event.waitUntil(syncImages());
  }
});

// Função para sincronizar esmaltes
async function syncPolishes() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE);
    const requests = await cache.keys();
    
    const promises = requests.map(async request => {
      if (request.url.includes('/sync/')) {
        const response = await cache.match(request);
        const data = await response.json();
        
        // Enviar dados para o servidor quando implementado
        console.log('[SW] Sincronizando:', data);
        
        // Remover do cache após sincronizar
        await cache.delete(request);
      }
    });
    
    await Promise.all(promises);
    
    // Notificar o usuário
    await self.registration.showNotification('Nail Collection', {
      body: 'Seus esmaltes foram sincronizados!',
      icon: '/icons/icon-192x192.png',
      badge: '/icons/icon-96x96.png',
      vibrate: [100, 50, 100]
    });
  } catch (error) {
    console.error('[SW] Erro na sincronização:', error);
  }
}

// Função para sincronizar imagens
async function syncImages() {
  console.log('[SW] Sincronizando imagens em background...');
  // Implementar sincronização de imagens quando necessário
}

// Periodic Background Sync - Atualizar app periodicamente
self.addEventListener('periodicsync', event => {
  if (event.tag === 'update-content') {
    console.log('[SW] Atualizando conteúdo em background...');
    event.waitUntil(updateContent());
  }
});

// Função para atualizar conteúdo
async function updateContent() {
  try {
    // Atualizar cache dos arquivos principais
    const cache = await caches.open(STATIC_CACHE);
    await cache.addAll(STATIC_FILES);
    
    console.log('[SW] Conteúdo atualizado com sucesso');
  } catch (error) {
    console.error('[SW] Erro ao atualizar conteúdo:', error);
  }
}

// Push Notifications
self.addEventListener('push', event => {
  console.log('[SW] Push notification recebida');
  
  let options = {
    body: 'Você tem novidades no Nail Collection!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-96x96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Ver Coleção',
        icon: '/icons/icon-96x96.png'
      },
      {
        action: 'close',
        title: 'Fechar',
        icon: '/icons/icon-96x96.png'
      }
    ]
  };

  // Se houver dados no push, usar
  if (event.data) {
    const data = event.data.json();
    options = {
      ...options,
      ...data
    };
  }

  event.waitUntil(
    self.registration.showNotification('Nail Collection', options)
  );
});

// Clique na notificação
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notificação clicada');
  event.notification.close();

  if (event.action === 'explore') {
    // Abrir a aba de coleção
    event.waitUntil(
      clients.openWindow('/index.html?tab=collection')
    );
  } else {
    // Abrir o app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Mensagens do cliente
self.addEventListener('message', event => {
  console.log('[SW] Mensagem recebida:', event.data);
  
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'SYNC_NOW') {
    event.waitUntil(syncPolishes());
  }
});

// Share Target - Receber compartilhamentos
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  if (event.request.method === 'POST' && url.pathname === '/index.html') {
    event.respondWith(handleShare(event.request));
  }
});

// Função para lidar com compartilhamentos
async function handleShare(request) {
  const formData = await request.formData();
  const image = formData.get('image');
  const name = formData.get('name');
  const description = formData.get('description');
  
  // Salvar no cache para processar no app
  const cache = await caches.open(DYNAMIC_CACHE);
  const shareData = {
    image: image,
    name: name,
    description: description,
    timestamp: Date.now()
  };
  
  await cache.put(
    new Request('/shared-data'),
    new Response(JSON.stringify(shareData))
  );
  
  // Redirecionar para o app
  return Response.redirect('/index.html?shared=true', 303);
}

// Verificar atualizações periodicamente
self.addEventListener('message', event => {
  if (event.data === 'CHECK_UPDATE') {
    self.registration.update();
  }
});

console.log('[SW] Service Worker carregado com sucesso!');