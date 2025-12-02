import ProductList from "@/components/ProductList";
import { getProductItems } from "@/lib/api";
import styles from "@/styles/Home.module.css";

export default async function ProductPage() {
  const products = await getProductItems();

  return (
    <>
      <ProductList products={products} className={styles.products} />
    </>
  );
}
