import ProductCard from "./ProductCard";
import styles from "../styles/RelatedProducts.module.css";

export default function RelatedProducts({
  currentId,
  currentCategory,
  products,
}) {
  const related = products
    .filter((p) => p.category === currentCategory && p.id !== currentId)
    .slice(0, 8); // می‌تونی تعداد رو تنظیم کنی

  return (
    <section className={styles.relatedSection}>
      <h3 className={styles.heading}>محصولات مرتبط</h3>
      <div className={styles.productsContainer}>
        {related.map((product) => (
          <div
            key={`${product.id}-${product.name}`}
            className={styles.cardWrapper}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
