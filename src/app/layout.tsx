import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { ApolloWrapper } from '@/wrappers/apollo-wrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "_ g a l l e r y",
  description: "_ g a l l e r y",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader color='blue' height={3} showSpinner={false} speed={500}/>
        <ApolloWrapper>
          <Header />
          <Sidebar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
