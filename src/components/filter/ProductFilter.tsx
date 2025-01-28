"use client";
import { IProduct } from "@/types/product";
import styles from "./filter.module.css";
import Image from "next/image";
import Product from "./Product";
import { useEffect, useState } from "react";
import Accordion from "./Accordion";
import useQuery from "@/hook/useQuery";
import { useRouter } from "next/navigation";

const ProductFilter = ({ products }: { products: IProduct[] }) => {
  const [toggleSlideBar, setToggleSlideBar] = useState(true);
  const [toggleMobileFilterOption, setToggleMobileFilterOption] = useState(false);
  const [toggleTopRightDropDown, setToggleTopRightDropDown] = useState(false);

  const windowWidth = window.innerWidth;
  console.log("product-filter", products);
  return (
    <section className="container">
      <div className={styles.productFilterWrapper}>
        {/* filter topbar */}
        <div className={styles.productFilter__topbar}>
          <div
            className={styles.productFilter__topbar__mobile__left}
            onClick={() => setToggleMobileFilterOption((pre) => !pre)}
          >
            <span>
              <strong>FILTER</strong>
            </span>
          </div>
          <div className={styles.productFilter__topbar__left}>
            <span>
              <strong>{products?.length} ITEMS</strong>
            </span>
            <div
              className={`flex-center ${styles.productFilter__topbar__filterToggle}`}
              onClick={() => setToggleSlideBar((pre) => !pre)}
            >
              {toggleSlideBar ? (
                <Image src={"/arrow-left.svg"} width={20} height={20} alt="close" />
              ) : (
                <Image src={"/arrow-right.svg"} width={20} height={20} alt="open" />
              )}
              <span>{toggleSlideBar ? "HIDE" : "SHOW"} FILTER</span>
            </div>
          </div>
          <div className={`flex-center ${styles.productFilter__topbar__right}`}>
            <span onClick={() => setToggleTopRightDropDown((pre) => !pre)}>
              <strong>RECOMMENDED</strong>
            </span>
            <div onClick={() => setToggleTopRightDropDown((pre) => !pre)}>
              {toggleTopRightDropDown ? (
                <Image src={"/arrow-up.svg"} width={20} height={20} alt="close" />
              ) : (
                <Image src={"/arrow-down.svg"} width={20} height={20} alt="close" />
              )}
            </div>

            <div className={`${styles.recommendedDropDown} ${!toggleTopRightDropDown && styles.hide}`}>
              <ul>
                <li>
                  <strong>recommended</strong>
                </li>
                <li>Newest first</li>
                <li>popular</li>
                <li>Price : high to low</li>
                <li>Price : low to high</li>
              </ul>
            </div>
          </div>
        </div>

        {/* filter sidebar */}
        <div className={styles.productFilter}>
          <div
            className={`${styles[toggleSlideBar ? "productFilter__sidebar__show" : "productFilter__sidebar__hide"]} ${
              !toggleMobileFilterOption && windowWidth < 768 && styles.hide
            }`}
          >
            <FilterByCategory />
          </div>
          <div className={styles[toggleSlideBar ? "productsWrapper_with_filter" : "productsWrapper_without_filter"]}>
            {products.map((product: IProduct) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FilterByCategory = () => {
  const { data, isLoading, error } = useQuery<string[]>({ url: "https://fakestoreapi.com/products/categories" });
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (selectedCategory) {
      router.push(`?category=${selectedCategory}`);
    }
  }, [selectedCategory, router]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Accordion title="CATEGORY" subTitle="All">
      <form className={styles.categories}>
        <span className={styles.categories__unselect} onClick={() => router.push("/")}>
          Unselect all
        </span>
        {data?.map((category) => (
          <div key={category} className="flex-center">
            <input
              type="radio"
              id={category}
              name="category"
              onChange={(e) => setSelectedCategory(e.target.id)}
              value={selectedCategory}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </form>
    </Accordion>
  );
};

export default ProductFilter;
