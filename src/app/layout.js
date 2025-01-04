import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Header from "./ui/Header";
import Head from 'next/head';

export const metadata = {
  title: 'Vytor - mi portafolio',
  description: 'Mi portafolio personal como desarrollador de software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-950 w-full p-5">
        {/* Encabezado */}
        <Header />

        {/* Contenido dinámico (cambia según la página) */}
        <main style={{ padding: 10, margin:0, color: '#fff' }}>
          {children}
        </main>

        {/* Pie de página */}
        <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
          <p>© 2025 Mi Portafolio. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
