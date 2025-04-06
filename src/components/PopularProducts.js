import ProductCard from "./ProductCard";
import styles from "../styles/PopularProducts.module.css";

export default function PopularProducts({ products }) {
  const popular = products.slice(0, 6);

  return (
    <section id="popular" className={styles.products}>
      <h2 className={styles.title}>محصولات پرفروش</h2>
      <div className={styles.grid}>
        {popular.map((product) => (
          <div key={product.id} className={styles.cardWrapper}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
