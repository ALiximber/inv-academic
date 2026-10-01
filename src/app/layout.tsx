import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ORC — Revisión y corrección académica',
  description:
    'Plataforma profesional de revisión de textos académicos con retroalimentación detallada, resaltado interactivo de errores y evaluación estructural.',
  keywords: ['revisión académica', 'corrección de textos', 'ensayo', 'artículo científico', 'tesis'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
