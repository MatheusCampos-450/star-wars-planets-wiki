import type { Metadata } from 'next';

import Footer from '@/shared/components/layout/Footer';
import QueryProvider from '@/shared/context/QueryProvider';
import '../shared/styles/global.css';

export const metadata: Metadata = {
  title: 'Star Wars Planets',
  description:
    'Explore the Star Wars galaxy and discover fascinating information about the planets. Find intriguing details such as climate, terrain, and inhabitants of each planet. An intergalactic journey awaits you on our website. May the Force be with you!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
        />
      </head>

      <body suppressHydrationWarning>
        <QueryProvider>
          {children}

          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
