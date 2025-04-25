import fs from "fs";
import path from "path";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProductCard from "../../components/ProductCard";
import styles from "../../styles/ProductsPage.module.css";

export async function getStaticProps() {
  const dataDir = path.join(process.cwd(), "src", "data");
  const products = JSON.parse(
    fs.readFileSync(path.join(dataDir, "products.json"), "utf-8")
  );
  return { props: { products } };
}

export default function ProductsPage({ products }) {
  const router = useRouter();
  const { search, category } = router.query;
  const [searchValue, setSearchValue] = useState(search || "");
  const [categoryValue, setCategoryValue] = useState(category || "");
  const [visibleCount, setVisibleCount] = useState(15);

  useEffect(() => {
    setSearchValue(search || "");
    setCategoryValue(category || "");
    setVisibleCount(15);
  }, [search, category]);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = categoryValue ? p.category === categoryValue : true;
    const matchesSearch = searchValue
      ? p.name.toLowerCase().includes(searchValue.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  const showMore = () =>
    setVisibleCount((prev) => Math.min(prev + 15, filteredProducts.length));

  const updateQuery = (newSearch, newCategory) => {
    const query = {};
    if (newSearch) query.search = newSearch;
    if (newCategory) query.category = newCategory;
    router.replace({ pathname: "/products", query });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    updateQuery(value, categoryValue);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryValue(value);
    updateQuery(searchValue, value);
  };

  const clearFilters = () => {
    setSearchValue("");
    setCategoryValue("");
    setVisibleCount(15);
    router.replace("/products");
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>محصولات ما</h1>

      <div className={styles.filters}>
        <input
          type="text"
          placeholder="جستجو..."
          value={searchValue}
          onChange={handleSearchChange}
          className={styles.filterInput}
        />
        <select
          value={categoryValue}
          onChange={handleCategoryChange}
          className={styles.filterSelect}
        >
          <option value="">همه دسته‌ها</option>
          <option value="آبگرمکن">آبگرمکن</option>
          <option value="موتور کولر">موتور کولر</option>
          <option value="هسته سیم پیچی">هسته سیم پیچی</option>
          <option value="پمپ آب">پمپ آب</option>
        </select>
        <button onClick={clearFilters} className={styles.clearBtn}>
          حذف فیلترها
        </button>
      </div>

      <div className={styles.grid}>
        {filteredProducts.slice(0, visibleCount).map((product, idx) => (
          <ProductCard key={`${product.id}-${idx}`} product={product} />
        ))}
      </div>

      {visibleCount < filteredProducts.length && (
        <button className={styles.showMoreBtn} onClick={showMore}>
          مشاهده بیشتر
        </button>
      )}
    </section>
  );
}
