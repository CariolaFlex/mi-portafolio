import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Andrés Cariola - Ingeniería Civil & Automatización IA",
  description: "Portafolio de Andrés Cariola - Estudiante de Ingeniería Civil y Especialista en Automatización con Google Workspace e IA.",
  openGraph: {
    title: "Andrés Cariola - Automation & AI Specialist",
    description: "Portafolio de Andrés Cariola - Estudiante de Ingeniería Civil y Especialista en Automatización con Google Workspace e IA.",
    images: ["https://i.postimg.cc/vBVjWBhw/Logo-HD.png"],
    type: "website",
  },
  keywords: ["Automatización", "IA", "Google Apps Script", "Ingeniería Civil", "AI Integration", "Google Workspace"],
  authors: [{ name: "Andrés Cariola" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        {/* Google Fonts - JetBrains Mono para código */}
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
