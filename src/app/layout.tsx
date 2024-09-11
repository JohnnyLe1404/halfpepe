import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Schoolbell } from 'next/font/google'


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const schoolbell = Schoolbell({
  subsets: ['latin'],
  weight: "400"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
