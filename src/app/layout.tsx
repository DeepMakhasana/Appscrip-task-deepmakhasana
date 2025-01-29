import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const simplonNorm = localFont({
  src: "./fonts/SimplonNorm-Regular-WebS.woff",
  variable: "--font-simplon-norm",
  weight: "100 400",
});

const simplonNormBold = localFont({
  src: "./fonts/SimplonNorm-Bold-WebS.woff",
  variable: "--font-simplon-norm-bold",
  weight: "400 900",
});

export const metadata: Metadata = {
  title: "Storefy",
  description:
    "Shop the latest trends and best deals on all product at Storefy. Enjoy secure shopping, fast delivery, and exclusive discounts. Find high-quality products, unbeatable prices, and exceptional customer service all in one place. Shop now and experience hassle-free online shopping!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${simplonNorm.variable} ${simplonNormBold.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
