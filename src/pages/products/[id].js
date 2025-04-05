import fs from "fs";
import path from "path";
import Head from "next/head";
import styles from "../../styles/ProductDetails.module.css";
import RelatedProducts from "@/components/RelatedProducts";
import ProductReviews from "@/components/ProductReviews";
import ProductTabs from "@/components/ProductTabs";
import ProductGallery from "@/components/ProductGallery";

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  const products = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dataDir = path.join(process.cwd(), "src", "data");

  const products = JSON.parse(
    fs.readFileSync(path.join(dataDir, "products.json"), "utf-8")
  );

  const reviews = JSON.parse(
    fs.readFileSync(path.join(dataDir, "reviews.json"), "utf-8")
  );

  const product = products.find((p) => p.id.toString() === params.id);

  return {
    props: {
      product,
      products,
      reviews,
    },
  };
}

export default function ProductDetails({ product, products, reviews }) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <section className={styles.details}>
        {product.images && <ProductGallery images={product.images} />}
        <div className={styles.info}>
          <h1>{product.name}</h1>
          <p className={styles.price}>{product.price.toLocaleString()} تومان</p>
          <p>{product.description.intro}</p>
          <ul>
            {product.specs.map((s, i) => (
              <li key={i}>✔ {s}</li>
            ))}
          </ul>
          {Array.isArray(product.colors) && (
            <p>رنگ‌ها: {product.colors.join("، ")}</p>
          )}
          {Array.isArray(product.sizes) && (
            <p>سایزها: {product.sizes.join("، ")}</p>
          )}
          <a
            href={`https://wa.me/?text=سلام، من علاقه‌مند به خرید ${product.name} هستم.`}
            target="_blank"
            className={styles.orderBtn}
          >
            سفارش از واتساپ
          </a>
        </div>
      </section>

      <ProductTabs product={product} reviews={reviews} />

      <RelatedProducts
        currentId={product.id}
        currentCategory={product.category}
        products={products}
      />
    </>
  );
}
