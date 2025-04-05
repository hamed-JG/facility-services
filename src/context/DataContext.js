
import { createContext, useContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children, initialData }) => {
  const [products, setProducts] = useState(initialData?.products || []);
  const [blogs, setBlogs] = useState(initialData?.blogs || []);
  const [testimonials, setTestimonials] = useState(initialData?.testimonials || []);
  const [loading, setLoading] = useState(!initialData);

  useEffect(() => {
    if (!initialData) {
      const fetchAllData = async () => {
        try {
          const [resProducts, resBlogs, resTestimonials] = await Promise.all([
            fetch("/api/products"),
            fetch("/api/blogs"),
            fetch("/api/testimonials"),
          ]);

          const productsData = await resProducts.json();
          const blogsData = await resBlogs.json();
          const testimonialsData = await resTestimonials.json();

          setProducts(productsData);
          setBlogs(blogsData);
          setTestimonials(testimonialsData);
        } catch (err) {
          console.error("خطا در دریافت اطلاعات", err);
        } finally {
          setLoading(false);
        }
      };

      fetchAllData();
    }
  }, [initialData]);

  return (
    <DataContext.Provider value={{ products, blogs, testimonials, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
