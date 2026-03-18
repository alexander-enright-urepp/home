import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alexander Enright Companies',
  description: 'Central hub for Alexander Enright Companies projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}