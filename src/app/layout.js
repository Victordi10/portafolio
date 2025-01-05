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
      <body className=" bg-[rgb(3,8,17)] w-full  items-center justify-center">
        {/* Encabezado */}
        <Header />

        {/* Contenido dinámico (cambia según la página) */}
        <main className="w-full  flex flex-col gap-12 sm:p-10 p-6  items-center justify-center">
        {children}
        </main>

        {/* Pie de página */}
        <footer className="bg-slate-900 p-5 flex flex-col items-center justify-center">
          
          <p className="text-center">© 2025 Mi Portafolio. Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
