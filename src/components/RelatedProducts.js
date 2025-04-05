import ProductCard from "./ProductCard";
import styles from "../styles/RelatedProducts.module.css";

export default function RelatedProducts({
  currentId,
  currentCategory,
  products,
}) {
  const related = products
    .filter((p) => p.category === currentCategory && p.id !== currentId)
    .slice(0, 4);

  return (
    <section className={styles.relatedSection}>
      <h3>محصولات مشابه</h3>
      <div className={styles.productsContainer}>
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
