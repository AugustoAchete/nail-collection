# 💅 Nail Collection - Gerenciador de Esmaltes

Um aplicativo web progressivo (PWA) para organizar e gerenciar sua coleção de esmaltes de forma prática e visual, com ferramentas avançadas de seleção e combinação de cores.

## ✨ Funcionalidades

### 📱 Progressive Web App
- Funciona offline após a primeira visita
- Instalável em dispositivos móveis e desktop
- Interface responsiva otimizada para smartphones

### 🎨 Gestão de Coleção
- **Adicionar esmaltes** com informações detalhadas:
  - Nome e marca
  - Cor principal com seletor visual avançado
  - Categoria (cremoso, perolado, glitter, metálico, etc.)
  - Data de validade
  - Fotos do esmalte
  - Observações pessoais

### 🌈 Seletor de Cores Avançado
- **Cores Favoritas**: Salve suas cores preferidas para acesso rápido
- **Cores Recentes**: Histórico automático das últimas 12 cores utilizadas
- **Paletas Temáticas**: 10 temas com cores cuidadosamente selecionadas
  - 🌞 Verão - 🌨️ Inverno - 🌸 Primavera - 🍂 Outono
  - ⚡ Neon - 🌈 Pastel - ✨ Metálico - 🤍 Nude
  - 🖤 Gótico - 👑 Vintage
- **Eye Dropper**: Capture cores de fotos ou use o seletor nativo do navegador
- **Sliders HSL**: Controle preciso de matiz, saturação e luminosidade
- **Input hexadecimal**: Inserção manual de códigos de cor

### ✨ Sugestões Inteligentes de Cores
- **Combinações Harmoniosas**: 5 tipos de harmonias cromáticas
  - Monocromática (variações da mesma cor)
  - Complementar (cores opostas)
  - Triádica (três cores equilibradas)
  - Análoga (cores vizinhas)
  - Split-Complementar (combinação sofisticada)
- **Gerador de Paletas**: Cria paletas automáticas baseadas na cor selecionada
- **Ideias de Nail Art**: Sugestões personalizadas baseadas na cor escolhida

### 🔍 Organização e Busca
- Filtro por cores com agrupamento inteligente
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
2. Abra o arquivo `index.html` em seu navegador
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
├── index.html        # Aplicação principal
├── manifest.json     # Configuração PWA
├── sw.js            # Service Worker para funcionalidade offline
├── icons/           # Diretório de ícones PWA
│   ├── icon-32x32.png
│   ├── icon-192x192.png
│   └── icon-512x512.png
└── README.md        # Este arquivo
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
- Cores favoritas e recentes do usuário
- Imagens em formato base64
- Nail arts associadas a cada esmalte
- Configurações e preferências

## 🎨 Recursos Visuais

- Interface moderna com gradientes
- Animações suaves de transição
- Design responsivo para todos os tamanhos de tela
- Modo de visualização em grade
- Preview de cores em tempo real
- Seletor de cores avançado com canvas interativo
- Paletas temáticas com cores organizadas
- Sugestões visuais de combinações harmoniosas

## 📱 Compatibilidade

- ✅ Chrome (Android/Desktop) - Suporte completo incluindo EyeDropper API
- ✅ Safari (iOS/macOS) - Funcionalidades completas
- ✅ Edge (Desktop) - Suporte completo incluindo EyeDropper API
- ✅ Firefox (Android/Desktop) - Funcionalidades completas
- ✅ Samsung Internet - Funcionalidades completas

**Nota**: A API EyeDropper nativa está disponível apenas no Chrome e Edge. Outros navegadores usam o upload de imagem para captura de cores.

## 🔒 Privacidade

- Todos os dados ficam armazenados localmente no seu dispositivo
- Nenhuma informação é enviada para servidores externos
- Suas fotos e informações permanecem privadas

## 📝 Notas de Desenvolvimento

### Service Worker
O Service Worker permite que o app funcione offline, armazenando em cache todos os recursos necessários após a primeira visita.

### Funcionalidades Avançadas de Cor
- **Canvas API**: Usado para captura de cores de imagens
- **EyeDropper API**: API nativa do navegador para captura de cores da tela
- **Algoritmos HSL**: Conversões precisas entre sistemas de cor
- **Teoria das Cores**: Implementação de harmonias cromáticas clássicas

### Armazenamento Inteligente
- Cores favoritas e recentes são mantidas separadamente
- Limite automático de 12 cores recentes para otimização
- Persistência de paletas personalizadas

## 🤝 Contribuindo

Sinta-se à vontade para sugerir melhorias ou reportar problemas!

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e educacional.

---

Desenvolvido com 💜 para amantes de esmaltes