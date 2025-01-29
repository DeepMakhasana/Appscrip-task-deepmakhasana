// import styles from "./page.module.css";

import ProductFilter from "@/components/filter/ProductFilter";
import PageHeading from "@/components/page-heading/PageHeading";
import { IProduct } from "@/types/product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Storefy",
  description:
    "Shop the latest trends and best deals on all product at Storefy. Enjoy secure shopping, fast delivery, and exclusive discounts. Find high-quality products, unbeatable prices, and exceptional customer service all in one place. Shop now and experience hassle-free online shopping!",
};

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams.category;
  const baseUrl = "https://fakestoreapi.com";
  const url = category ? `${baseUrl}/products/category/${category}` : `${baseUrl}/products`;
  const res = await fetch(url, {
    cache: "no-store",
  });
  const products: IProduct[] = await res.json();

  return (
    <main>
      <PageHeading
        title="Discover our products"
        tagLine="Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor."
      />
      <ProductFilter products={products} />
    </main>
  );
}
