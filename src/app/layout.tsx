import './globals.css';

export const metadata = {
  title: 'Tamar Alania',
  description: 'Full-Stack Developer Portfolio',
  icons: {
    icon: '/portfolio.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
