import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/ProductsPage.module.css";

function Filters({
  initialCategory = "",
  initialSearch = "",
  initialSort = "",
}) {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    setSearch(initialSearch);
    setCategory(initialCategory);
    setSort(initialSort);
  }, [initialSearch, initialCategory, initialSort]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const query = {};
      if (search) query.search = search;
      if (category) query.category = category;
      if (sort) query.sort = sort;

      router.push({
        pathname: "/products",
        query,
      });
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [search, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setSort("");
    router.push("/products");
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterGroup}>
        <input
          type="text"
          placeholder="جستجو..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">همه دسته‌ها</option>
          <option value="کولر">کولر</option>
          <option value="آبگرمکن">آبگرمکن</option>
        </select>
        <div className={styles.sortButtons}>
          <button type="button" onClick={() => setSort("asc")}>
            قیمت کم به زیاد
          </button>
          <button type="button" onClick={() => setSort("desc")}>
            قیمت زیاد به کم
          </button>
        </div>
      </div>
      <button type="button" className={styles.clearBtn} onClick={clearFilters}>
        پاک کردن فیلترها
      </button>
    </div>
  );
}

export default Filters;
