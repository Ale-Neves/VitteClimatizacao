# 🌬️ Vitte Climatização

> Portfólio profissional de serviços e produtos de climatização em Adamantina/SP

[![React](https://img.shields.io/badge/React-19.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-purple.svg)](https://vitejs.dev/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.x-pink.svg)](https://styled-components.com/)

## 📋 Sobre o Projeto

Site institucional da **Vitte Climatização**, especializada em instalação, manutenção e venda de ar-condicionado em Adamantina/SP. Desenvolvido com tecnologias modernas e otimizado para SEO e performance.

### ✨ Principais Funcionalidades

- 🎨 Design moderno e responsivo
- ⚡ Performance otimizada com Vite
- 🔍 SEO completo para ranking no Google
- 📱 PWA (Progressive Web App)
- 🍪 Gerenciamento de cookies (LGPD)
- 💬 Botão flutuante de WhatsApp
- 📧 Formulário de contato integrado
- 🎠 Carrosséis de produtos e depoimentos
- 📍 Google Maps integrado
- 🏢 Schema Markup para LocalBusiness

---

## 🚀 Tecnologias

### Core
- **React 19.1** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **Styled Components** - CSS-in-JS

### Bibliotecas
- **React Router DOM** - Roteamento
- **Framer Motion** - Animações
- **React Query** - Data fetching
- **Axios** - HTTP client
- **React Icons** - Ícones

### Arquitetura
- **Atomic Design** - Componentização (atoms → molecules → organisms → templates)
- **Context API** - Gerenciamento de estado
- **Custom Hooks** - Lógica reutilizável

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Input, Logo, SEO, WhatsAppButton)
│   ├── molecules/      # Combinações simples (ServiceCard, CookieBanner, ContactForm)
│   ├── organisms/      # Seções complexas (Header, Banner, Footer)
│   └── templates/      # Layouts de página
├── contexts/           # Context API (Notifications, Cookies)
├── features/           # Features da aplicação (home, etc.)
├── hooks/              # Custom hooks (useSEO, useCookieConsent)
├── styles/             # Theme, GlobalStyles, tipos
├── constants/          # Constantes e configurações (SEO, rotas)
├── types/              # TypeScript definitions
└── routes/             # Configuração de rotas

public/
├── sitemap.xml         # Sitemap para SEO
├── robots.txt          # Instruções para crawlers
├── manifest.json       # PWA manifest
└── .htaccess          # Configurações Apache
```

---

## 🎯 SEO Otimizado

### Implementações
✅ **Meta Tags Dinâmicas** - Title, description, keywords
✅ **Open Graph** - Compartilhamento em redes sociais
✅ **Twitter Cards** - Preview no Twitter
✅ **Structured Data** - Schema.org LocalBusiness
✅ **Sitemap XML** - Indexação completa
✅ **Robots.txt** - Instruções para crawlers
✅ **Canonical URLs** - Evita conteúdo duplicado
✅ **PWA Manifest** - App instalável
✅ **Performance** - Lazy loading, code splitting

### Keywords Principais
- ar-condicionado adamantina
- instalação ar-condicionado
- manutenção ar-condicionado
- climatização adamantina
- conserto ar-condicionado

📚 **Documentação completa:** [SEO_GUIDE.md](SEO_GUIDE.md)

---

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js ≥ 22.20.0
- npm ≥ 10.0.0

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/vitteclimatizacao.git

# Entre no diretório
cd vitteclimatizacao

# Instale as dependências
npm install

# Verifique o ambiente
npm run env:check
```

### Desenvolvimento

```bash
# Inicia servidor de desenvolvimento
npm run dev

# Acesse em: http://localhost:5173
```

### Build e Preview

```bash
# Gera build de produção
npm run build

# Visualiza build localmente
npm run preview
```

### Code Quality

```bash
# Lint
npm run lint              # Verifica erros
npm run lint:fix         # Corrige automaticamente

# Format
npm run format           # Formata código
npm run format:check     # Verifica formatação

# Check completo
npm run code:check       # Lint + Format
npm run code:fix         # Fix tudo
```

---

## 🎨 Design System

### Cores
```typescript
primary: {
  cyan: "#00FFFF",    // Destaque principal
  main: "#00BBFF",    // Hover states
}

background: {
  primary: "#1B1B1B", // Fundo escuro
  secondary: "#F5F5F5" // Fundo claro
}
```

### Tipografia
- **Primária:** Inter (UI elements)
- **Secundária:** Montserrat (Headings)

### Breakpoints
```typescript
xs: "600px"   // Mobile
sm: "720px"   // Tablet
md: "1280px"  // Notebook
lg: "1440px"  // Desktop
xl: "1920px"  // Desktop+
```

---

## 📱 Componentes Principais

### WhatsAppButton
Botão flutuante para contato direto via WhatsApp

```tsx
import { WhatsAppButton } from './components';

<WhatsAppButton 
  phoneNumber="5518997140925"
  message="Olá! Gostaria de mais informações."
/>
```

### CookieBanner
Banner de consentimento de cookies (LGPD)

```tsx
import { CookieBanner } from './components';

<CookieBanner 
  onAccept={() => console.log('Aceito')}
  onReject={() => console.log('Recusado')}
/>
```

### SEO Component
Gerenciamento de meta tags para SEO

```tsx
import { SEO } from './components';

<SEO 
  title="Nossos Serviços"
  description="Conheça nossos serviços..."
  keywords={["instalação", "manutenção"]}
/>
```

---

## 🚀 Deploy

### Netlify (Recomendado)

```bash
# Build command
npm run build

# Publish directory
dist

# Configurações adicionais
# Adicionar redirects no netlify.toml
```

### Vercel

```bash
# Build command
npm run build

# Output directory
dist

# Framework preset
Vite
```

### Apache Server
1. Faça upload da pasta `dist/`
2. Configure o `.htaccess` (já incluído)
3. Verifique HTTPS
4. Configure DNS

---

## 📊 Monitoramento

### Google Search Console
1. Verificar propriedade
2. Enviar sitemap.xml
3. Monitorar indexação e keywords

### Google Analytics
Adicionar quando cookies forem aceitos:

```tsx
const { consentStatus } = useCookieConsent();

useEffect(() => {
  if (consentStatus === 'accepted') {
    // Inicializar GA
  }
}, [consentStatus]);
```

### Performance
- Lighthouse CI
- PageSpeed Insights
- Core Web Vitals

---

## 📝 Documentação Adicional

- [Guia Completo de SEO](SEO_GUIDE.md)
- [Implementações Recentes](IMPLEMENTACOES.md)
- [Imagens para SEO](public/IMAGES_README.md)

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Add: Nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é proprietário da **Vitte Climatização**.

---

## 👥 Contato

**Vitte Climatização**
- 📍 Rua Iracema Nair Baesso Rombaldi, 800 - Adamantina/SP
- 📞 (18) 99714-0925
- 📧 diegobritovitte59@gmail.com
- 🌐 [vitteclimatizacao.com.br](https://vitteclimatizacao.com.br)

---

<div align="center">
  <p>Desenvolvido com ❄️ por Studway</p>
</div>
