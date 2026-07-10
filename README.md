# Polittis Landing Page

Landing page para The Politti's — Confeitaria Artesanal

## Tecnologias

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Vercel Analytics

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

## Build

```bash
npm run build
```

Os arquivos saem em `dist/`.

## Formulário de contato

Por padrão, o formulário abre o WhatsApp com a mensagem pronta.

Para receber e-mails via Formspree:

1. Crie um formulário em [formspree.io](https://formspree.io)
2. Copie o ID do formulário
3. Crie um `.env` (veja `.env.example`):

```bash
VITE_FORMSPREE_ID=seu_id_aqui
```

No Vercel, adicione a mesma variável em **Project Settings → Environment Variables**.

## Deploy na Vercel

1. Envie o repositório para o GitHub (se ainda não estiver).
2. Em [vercel.com/new](https://vercel.com/new), importe o projeto.
3. Framework: **Vite** (detectado automaticamente via `vercel.json`).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.

Ou via CLI:

```bash
npx vercel
```

Para produção:

```bash
npx vercel --prod
```

## Estrutura

```
polittis-landing/
├── public/                 # Imagens e assets
├── src/
│   └── components/Home/
│       ├── Carousel.tsx    # Hero / header
│       ├── ContactForm.tsx # Formulário de contato
│       ├── Galery.tsx
│       └── Home.tsx
├── vercel.json
└── package.json
```
