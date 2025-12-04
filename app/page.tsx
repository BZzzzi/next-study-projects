import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import styles from "@/styles/Home.module.css";
import { getProductItems } from "@/lib/api";

export const metadata = {
  title: "쇼핑몰 상품 페이지",
};

export default async function Home() {
  const products = await getProductItems();

  return (
    <>
      <div className={styles.home}>
        <SearchForm />
        <ProductList products={products} />
      </div>
    </>
  );
}
