import fs from "fs";
import path from "path";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useTitle } from "@/context/TitleContext";
import RelatedProducts from "@/components/RelatedProducts";
import styles from "../../styles/ProductDetails.module.css";

export default function ProductDetails({ product, products }) {
  const { setPageTitle } = useTitle();
  const [selectedImage, setSelectedImage] = useState(product.image[0]);

  useEffect(() => {
    setPageTitle(product.name);
  }, [product.name]);

  const firstSpecs = product.specs.slice(0, 3);
  const shareLink = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      {/* Section 1: Gallery & Summary */}
      <section className={styles.firstSection}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className={styles.thumbnails}>
            {product.image.map((img, idx) => (
              <div
                key={idx}
                className={`${styles.thumb} ${
                  img === selectedImage ? styles.activeThumb : ""
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`${product.name} ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.summary}>
          <h1 className={styles.title}>{product.name}</h1>
          {product.category === "موتور کولر" ? (
            <p className={styles.contactText}>برای قیمت تماس بگیرید</p>
          ) : (
            <p className={styles.price}>
              {product.price.toLocaleString()} تومان
            </p>
          )}
          <div className={styles.specsSummary}>
            {firstSpecs.map((s, i) => (
              <p key={i} className={styles.specItem}>
                ✔ {s}
              </p>
            ))}
          </div>
          <div className={styles.actionButtons}>
            <a
              href={`https://wa.me/+989194883039?text=سلام، قیمت ${product.name} رو میخواستم`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              استعلام واتساپ
            </a>
            <a href="tel:+989194883039" className={styles.callBtn}>
              تماس
            </a>
            <a
              onClick={() =>
                navigator.share &&
                navigator.share({ title: product.name, url: shareLink })
              }
              className={styles.shareBtn}
            >
              اشتراک‌ گذاری
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Full Description */}
      <section className={styles.descriptionSection}>
        <h2 className={styles.sectionTitle}>توضیحات</h2>
        <div className={styles.descriptionBox}>
          <p>{product.description.intro}</p>
          <ul>
            {product.specs.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <p>{product.description.usage}</p>
          <p className={styles.seoText}>{product.description.seo}</p>
        </div>
      </section>

      {/* Section 3: Related Products */}
      <section className={styles.relatedSection}>
      </section>
        <RelatedProducts
          currentId={product.id}
          currentCategory={product.category}
          products={products}
        />
    </>
  );
}

export async function getStaticPaths() {
  const products = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "src/data/products.json"), "utf-8")
  );
  return {
    paths: products.map((p) => ({ params: { id: p.id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "src/data/products.json"), "utf-8")
  );
  const product = products.find((p) => p.id.toString() === params.id);
  return { props: { product, products } };
}
