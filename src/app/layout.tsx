import './globals.css';

export const metadata = {
  title: 'Tamar Alania',
  description: 'Full-Stack Developer Portfolio',
  metadataBase: new URL('https://www.tamaralania.dev'),
  openGraph: {
    title: 'Tamar Alania – Full-Stack Developer',
    description:
      'Full-Stack Developer focused on frontend — crafting scalable, user-centric web experiences using React, TypeScript, Node.js, and modern UI libraries.',
    url: 'https://www.tamaralania.dev',
    siteName: 'Tamar Alania Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tamar Alania Portfolio',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/portfolio.png',
    shortcut: '/portfolio.png',
    apple: '/portfolio.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
