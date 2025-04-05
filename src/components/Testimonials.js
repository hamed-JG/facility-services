import styles from "../styles/Testimonials.module.css";

export default function Testimonials({ testimonials }) {
  if (!Array.isArray(testimonials) || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2 className={styles.title}>نظرات مشتریان</h2>
      <div className={styles.grid}>
        {testimonials.map((t, i) => (
          <div key={i} className={`${styles.card} fadeInUp`}>
            <img src={t.image} alt={t.name} className={styles.avatar} />
            <div className={styles.name}>{t.name}</div>
            <p className={styles.text}>{t.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
