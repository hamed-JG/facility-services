import { useState } from "react";
import ProductReviews from "./ProductReviews";
import styles from "../styles/ProductTabs.module.css";

export default function ProductTabs({ product, reviews }) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabButtons}>
        <button
          className={activeTab === "description" ? styles.active : ""}
          onClick={() => setActiveTab("description")}
        >
          توضیحات
        </button>
        {/* <button
          className={activeTab === "specs" ? styles.active : ""}
          onClick={() => setActiveTab("specs")}
        >
          مشخصات فنی
        </button> */}
        <button
          className={activeTab === "reviews" ? styles.active : ""}
          onClick={() => setActiveTab("reviews")}
        >
          نظرات کاربران
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === "description" && (
          <div className={styles.description}>
            <p>{product.description.intro}</p>
            <ul>
              {product.specs.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p>{product.description.usage}</p>
            <p className={styles.seoText}>{product.description.seo}</p>
          </div>
        )}

        {/* {activeTab === "specs" && (
          <ul className={styles.specs}>
            {product.specs.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
        )} */}

        {activeTab === "reviews" && (
          <ProductReviews reviews={reviews} productId={product.id} />
        )}
      </div>
    </div>
  );
}
