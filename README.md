# Polittis Landing Page

Landing page para The Politti's - Confeitaria Artesanal

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build

Para criar a build de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## 📁 Estrutura do Projeto

```
polittis-landing/
├── public/
│   ├── assets/
│   │   └── banners/        # Imagens do carousel
│   ├── ensaios/            # Imagens da galeria
│   └── profile.jpg         # Foto de perfil
├── src/
│   ├── components/
│   │   └── Home/
│   │       ├── Carousel.tsx # Componente do carousel
│   │       ├── Galery.tsx  # Componente da galeria
│   │       └── Home.tsx    # Componente principal
│   ├── App.tsx
│   ├── index.css           # Estilos globais com Tailwind
│   └── main.tsx
└── package.json
```

## 🎨 Componentes

### Home
Componente principal que contém todas as seções da landing page:
- **Carousel**: Banner rotativo com imagens
- **Test**: Seção "Por que escolher The Politti's?"
- **AboutMe**: Seção sobre a chef
- **MenuSession**: Seção de especialidades
- **Galery**: Galeria de fotos com integração Instagram
- **Location**: Mapa com localização

## 📝 Notas

- As imagens estão na pasta `public/` e são referenciadas com caminhos absolutos
- O projeto usa Tailwind CSS v4 com configuração via CSS
- Todos os componentes foram adaptados do projeto Next.js original para React padrão
