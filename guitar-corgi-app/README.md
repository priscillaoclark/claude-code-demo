# Rocco - The Guitar Playing Corgi 🎸

A modern web application showcasing Rocco, the world's most talented guitar-playing corgi. Built with Next.js 15 and styled with Tailwind CSS in a dark theme.

## Features

- **Landing Page**: Hero section with call-to-action buttons and feature highlights
- **Bio Page**: Rocco's complete story from humble beginnings to stardom
- **Gallery**: Interactive photo gallery with modal view
- **Dark Theme**: Modern dark mode design with custom color palette
- **Responsive Design**: Fully responsive across all device sizes
- **Navigation**: Fixed navigation bar with active state highlighting

## Tech Stack

- **Framework**: Next.js 15.4.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with inline theme configuration
- **Font**: Geist Sans & Geist Mono

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
guitar-corgi-app/
├── app/
│   ├── page.tsx          # Landing page
│   ├── bio/
│   │   └── page.tsx      # Bio page
│   ├── gallery/
│   │   └── page.tsx      # Gallery page
│   ├── layout.tsx        # Root layout with navigation
│   └── globals.css       # Global styles and theme
├── components/
│   ├── Navigation.tsx    # Navigation component
│   └── GalleryClient.tsx # Client-side gallery component
└── public/              # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is created for demonstration purposes.