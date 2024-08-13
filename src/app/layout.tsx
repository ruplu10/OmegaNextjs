import type { Metadata } from "next";


import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const metadata: Metadata = {
  title: "Omega",
  description: "omega next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>

      </body>
    </html>
  );
}
