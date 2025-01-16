import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss"
import { Header } from "./Header";
import Footer from "./componentes/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifolio de Flavio Gama",
  description : "Site de portifolio em que os projetos ve,m direto da api do github",
  keywords: ['programaçao', 'portifolio', 'next,react'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}image_url`]
  },
robots:{
  index: true,
  follow:true,
  nocache:true,
  googleBot:{
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
    <html lang="en">
      
      <body className={inter.className}>
      <Header/>
        {children}
        <Footer/>
        </body>
    
    </html>
  );
}
