import fs from "fs";
import path from "path";
import Banner from "@/components/Banner";
import Features from "@/components/Features";
import PopularProducts from "@/components/PopularProducts";
import Blog from "@/components/Blog";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export async function getStaticProps() {
  const dataDir = path.join(process.cwd(), "src", "data");
  const products = JSON.parse(
    fs.readFileSync(path.join(dataDir, "products.json"), "utf-8")
  );
  const testimonials = JSON.parse(
    fs.readFileSync(path.join(dataDir, "testimonials.json"), "utf-8")
  );
  const blogs = JSON.parse(
    fs.readFileSync(path.join(dataDir, "blogs.json"), "utf-8")
  );

  return {
    props: {
      products,
      testimonials,
      blogs,
    },
  };
}

export default function Home({ products, testimonials, blogs }) {
  return (
    <div>
      <Banner />
      <Features />
      <PopularProducts products={products} />
      <Services />
      <Testimonials testimonials={testimonials} />
      <Blog blogs={blogs} />
    </div>
  );
}
