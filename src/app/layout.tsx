import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss"
import { Header } from "./Header";
import Footer from "./componentes/Footer";


const inter = Inter({ subsets: ["latin"] });

// É uma boa prática definir a URL base do seu site de forma consistente.
// A Vercel indicou "https://portifolio-git.vercel.app" no erro anterior.
// Você pode usar uma variável de ambiente (ex: NEXT_PUBLIC_SITE_URL) configurada na Vercel,
// ou usar a URL diretamente se ela for estática.
// const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://portifolio-git.vercel.app';

export const metadata: Metadata = {
  // metadataBase é crucial para resolver URLs relativas de imagens e outros assets.
  metadataBase: new URL('https://portifolio-git.vercel.app'), // Teste hardcodando a URL
  title: "Portifolio de Flavio Gama",
  description: "Site de portifolio em que os projetos veem direto da api do github",
  keywords: ['programaçao', 'portifolio', 'next', 'react'],
  openGraph: {
    title: "Portifolio de Flavio Gama", // Título específico para Open Graph
    description: "Descubra os projetos e habilidades de Flavio Gama, Desenvolvedor Full Stack.", // Descrição para Open Graph
    url: 'https://portifolio-git.vercel.app', // A URL canônica da página principal
    siteName: "Portfólio Flavio Gama",
    // As imagens devem ser caminhos relativos à pasta 'public'.
    // Certifique-se de ter uma imagem em /public/og-image.png (ou o nome que preferir)
    images: [
      {
        url: '/og-image.png', // Exemplo: /public/og-image.png
        width: 1200,
        height: 630,
        alt: 'Preview do Portfólio de Flavio Gama',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { // Adicionar metadados para Twitter Cards é recomendado
    card: 'summary_large_image',
    title: "Portifolio de Flavio Gama",
    description: "Descubra os projetos e habilidades de Flavio Gama, Desenvolvedor Full Stack.",
    // creator: '@seuUsuarioTwitter', // Opcional: seu usuário no Twitter
        // Com metadataBase definido, você pode usar caminhos relativos aqui também.
        // Certifique-se de ter uma imagem em /public/twitter-image.png (ou o nome que preferir)
        images: [
          // Usando um objeto para consistência e para adicionar 'alt' text
          { url: '/twitter-image.png', alt: 'Preview do Portfólio de Flavio Gama para Twitter' }
        ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true, // Avalie se 'nocache' é realmente necessário para todas as páginas.
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR"> {/* Alterado para português do Brasil */}
      
      <body className={inter.className}>
      <Header/>
        {children}
        <Footer/>
        </body>
    
    </html>
  );
}
