import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'Vytor - mi portafolio',
  description: 'Mi portafolio personal como desarrollador de software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Encabezado */}
        <header>
          <h1 style={{ textAlign: 'center', padding: '2rem 0', color: '#fff' }}>
            Vytor - mi portafolio
          </h1>
          <nav>
            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/about">Sobre mí</Link>
              </li>
              <li>
                <Link href="/services">Servicios</Link>
              </li>
              <li>
                <Link href="/contact">Contacto</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Contenido dinámico (cambia según la página) */}
        <main style={{ padding: 0, color: '#fff' }}>
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
