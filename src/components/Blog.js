import styles from "../styles/Blog.module.css";
import Link from "next/link";

export default function Blog({ blogs }) {
  if (!Array.isArray(blogs) || blogs.length === 0) return null;

  return (
    <section className={styles.blog} id="blog">
      <h2 className={styles.title}>مقالات آموزشی</h2>
      <div className={styles.grid}>
        {blogs.map((post, i) => (
          <div className={`${styles.card} fadeInUp`} key={i}>
            <img src={post.image} alt={post.title} className={styles.image} />
            <div className={styles.titleText}>{post.title}</div>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <Link href={post.link} className={styles.cta}>
              ادامه مطلب
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
