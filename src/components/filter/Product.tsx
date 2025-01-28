import { IProduct } from "@/types/product";
import Image from "next/image";
import styles from "./filter.module.css";

const Product = ({ product }: { product: IProduct }) => {
  const truncatedTitle = product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title;
  return (
    <div className={styles.productWrapper}>
      <div className={styles.product__image}>
        <Image src={product.image} width={200} height={200} sizes="100vw" alt={product.title} />
      </div>
      <h3>{truncatedTitle}</h3>
      <p>₹ {product.price}</p>
    </div>
  );
};

export default Product;
