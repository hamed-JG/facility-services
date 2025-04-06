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

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  useEffect(() => {
    setFilters({
      category: category || "",
      search: search || "",
      sort: sort || "",
    });
    setCurrentPage(1); // وقتی فیلتر تغییر می‌کنه، برگرد به صفحه اول
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

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <section className={styles.productsPage}>
      <h2 className={styles.title}>لیست محصولات</h2>

      <Filters
        initialSearch={filters.search}
        initialCategory={filters.category}
        initialSort={filters.sort}
      />

      <div className={styles.controls}>
        <label htmlFor="perPageSelect">تعداد در هر صفحه:</label>
        <select
          id="perPageSelect"
          value={perPage}
          onChange={(e) => {
            setPerPage(parseInt(e.target.value));
            setCurrentPage(1); // ریست به صفحه اول
          }}
        >
          <option value={6}>۶</option>
          <option value={12}>۱۲</option>
          <option value={18}>۱۸</option>
          <option value={24}>۲۴</option>
        </select>
      </div>

      <div className={styles.grid}>
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            قبلی
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                className={`${styles.pageButton} ${
                  currentPage === page ? styles.active : ""
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            );
          })}

          <button
            className={styles.pageButton}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            بعدی
          </button>
        </div>
      )}
    </section>
  );
}
