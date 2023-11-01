import { Logo } from "@/components/Logo";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <header className="hidden md:flex h-14 text-white bg-sky-600 items-center px-12">
          <Logo />
          <section className="flex flex-1 items-start px-12 space-x-8 font-medium text-s uppercase">
            <Link href={`list`}>
              <span>buy</span>
            </Link>
            <Link href={`list`}>
              <span>rent</span>
            </Link>
            <Link href={`list`}>
              <span>new ones</span>
            </Link>
          </section>
          <section className="flex items-center uppercase">
            <Link href={`list`}>
              <span>log in</span>
            </Link>
          </section>
        </header>
        <header className="flex md:hidden h-14 text-white bg-sky-600 items-center px-4">
          <section className="flex items-center uppercase">
            <span>menu</span>
          </section>
          <Logo />
          <section className="flex items-center uppercase">
            <span>log in</span>
          </section>
        </header>
        {children}
      </body>
    </html>
  );
}
