import styles from "@/styles/ProductList.module.css";
import { ProductItemsType } from "@/type/productType";
import StarRating from "./StarRating";
import Link from "next/link";
import Image from "next/image";

interface ProductListProps {
  className?: string;
  products: ProductItemsType;
}

export default function ProductList({
  className = "",
  products,
}: ProductListProps) {
  if (!products?.results) return null;

  return (
    <ul className={`${styles.productList} ${className}`}>
      {products.results?.map((product) => (
        <li key={product.id}>
          <Link className={styles.product} href={`/products/${product.id}`}>
            <Image
              className={styles.image}
              src={product.imgUrl}
              width={300}
              height={300}
              alt={product.name}
            />
            <div className={styles.content}>
              <div>
                <span className={styles.name}>{product.name}</span>
                <div className={styles.prices}>
                  <span className={styles.originalPrice}>
                    {product.price.toLocaleString()}원
                  </span>
                  {product.salePrice.toLocaleString()}원
                </div>
              </div>
              <hr className={styles.divider} />
              <div>
                <div className={styles.starRating}>
                  <StarRating value={product.starRating} />
                  {product.starRatingCount.toLocaleString()}
                </div>
                <div className={styles.likeCount}>
                  ♥{product.likeCount.toLocaleString()}
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
