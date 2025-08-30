# 💅 Nail Collection - Gerenciador de Esmaltes

Um aplicativo web progressivo (PWA) para organizar e gerenciar sua coleção de esmaltes de forma prática e visual.

## ✨ Funcionalidades

### 📱 Progressive Web App
- Funciona offline após a primeira visita
- Instalável em dispositivos móveis e desktop
- Interface responsiva otimizada para smartphones

### 🎨 Gestão de Coleção
- **Adicionar esmaltes** com informações detalhadas:
  - Nome e marca
  - Cor principal com seletor visual
  - Categoria (cremoso, perolado, glitter, metálico, etc.)
  - Data de validade
  - Fotos do esmalte
  - Observações pessoais

### 🔍 Organização e Busca
- Filtro por cores
- Busca por nome, marca ou cor
- Visualização em grade com miniaturas
- Detalhes completos de cada esmalte

### 💅 Nail Arts
- Adicione fotos de nail arts feitas com cada esmalte
- Galeria visual de suas criações
- Histórico de uso de cada produto

### 📊 Estatísticas
- Total de esmaltes na coleção
- Quantidade de marcas diferentes
- Esmaltes próximos do vencimento
- Total de nail arts cadastradas
- Últimos esmaltes adicionados

## 🚀 Como Usar

### Instalação Local

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html.html` em seu navegador
3. Para funcionalidade PWA completa, sirva os arquivos através de um servidor web local

### Instalação como PWA

#### No Android:
1. Acesse o app através do Chrome
2. Toque no menu (3 pontos)
3. Selecione "Adicionar à tela inicial"

#### No iOS:
1. Acesse o app através do Safari
2. Toque no botão de compartilhar
3. Selecione "Adicionar à Tela de Início"

#### No Desktop:
1. Acesse o app através do Chrome/Edge
2. Clique no ícone de instalação na barra de endereços
3. Confirme a instalação

## 📁 Estrutura do Projeto

```
nail-collection/
├── index.html.html    # Aplicação principal
├── manifest.json      # Configuração PWA
├── sw.js             # Service Worker para funcionalidade offline
├── criar-icones.html # Gerador de ícones PWA
├── icon-192.png      # Ícone 192x192
├── icon-512.png      # Ícone 512x512
└── README.md         # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura da aplicação
- **CSS3** - Estilização e animações
- **JavaScript** - Lógica e interatividade
- **LocalStorage** - Armazenamento de dados
- **Service Worker** - Funcionalidade offline
- **PWA** - Progressive Web App

## 💾 Armazenamento de Dados

Os dados são salvos localmente no navegador usando LocalStorage:
- Lista de esmaltes com todas as informações
- Imagens em formato base64
- Nail arts associadas a cada esmalte
- Configurações e preferências

## 🎨 Recursos Visuais

- Interface moderna com gradientes
- Animações suaves de transição
- Design responsivo para todos os tamanhos de tela
- Modo de visualização em grade
- Preview de cores em tempo real

## 📱 Compatibilidade

- ✅ Chrome (Android/Desktop)
- ✅ Safari (iOS/macOS)
- ✅ Edge (Desktop)
- ✅ Firefox (Android/Desktop)
- ✅ Samsung Internet

## 🔒 Privacidade

- Todos os dados ficam armazenados localmente no seu dispositivo
- Nenhuma informação é enviada para servidores externos
- Suas fotos e informações permanecem privadas

## 📝 Notas de Desenvolvimento

### Service Worker
O Service Worker permite que o app funcione offline, armazenando em cache todos os recursos necessários após a primeira visita.

### Gerador de Ícones
O arquivo `criar-icones.html` pode ser usado para gerar os ícones PWA necessários. Abra o arquivo no navegador e salve as imagens geradas.

## 🤝 Contribuindo

Sinta-se à vontade para sugerir melhorias ou reportar problemas!

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e educacional.

---

Desenvolvido com 💜 para amantes de esmaltes