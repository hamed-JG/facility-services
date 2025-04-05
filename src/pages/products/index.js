import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import Filters from "../../components/Filters";
import styles from "../../styles/ProductsPage.module.css";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const dataDir = path.join(process.cwd(), "src", "data");
  const products = JSON.parse(
    fs.readFileSync(path.join(dataDir, "products.json"), "utf-8")
  );

  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  const router = useRouter();
  const { category, search, sort } = router.query;

  const [filters, setFilters] = useState({
    category: category || "",
    search: search || "",
    sort: sort || "",
  });

  useEffect(() => {
    setFilters({
      category: category || "",
      search: search || "",
      sort: sort || "",
    });
  }, [category, search, sort]);

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        !filters.category || product.category === filters.category;
      const matchesSearch =
        !filters.search || product.name.includes(filters.search);
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (filters.sort === "asc") return a.price - b.price;
      if (filters.sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <section className={styles.productsPage}>
      <h2 className={styles.title}>لیست محصولات</h2>
      <Filters
        initialSearch={filters.search}
        initialCategory={filters.category}
        initialSort={filters.sort}
      />
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
