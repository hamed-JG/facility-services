import Link from "next/link";
import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <span className={styles.category}>{product.category}</span>
        <Link href={"/products/" + product.id}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </Link>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <ul className={styles.specs}>
          {product.specs?.slice(0, 1).map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <div className={styles.footer}>
          <span className={styles.price}>
            {product.price?.toLocaleString()} تومان
          </span>
          <Link href={"/products/" + product.id} className={styles.cta}>
            مشاهده محصول
          </Link>
        </div>
      </div>
    </div>
  );
}
