
import Head from "next/head";
import styles from "@/styles/Contact.module.css";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "989123456789"; // شماره واتساپ بدون + و 0
    const text = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Head>
        <title>تماس با ما</title>
      </Head>
      <section className={styles.contact}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h2>درباره ما</h2>
            <p>
              ما ارائه‌دهنده خدمات تخصصی نصب، تعمیر و سرویس انواع کولر و آبگرمکن هستیم. هدف ما
              ارائه خدمات سریع، مطمئن و مقرون‌به‌صرفه به تمام مشتریان عزیز می‌باشد.
            </p>
            <div className={styles.socials}>
              <p>📞 09123456789</p>
              <p>📧 info@example.com</p>
              <p>📍 تهران، خیابان انقلاب</p>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>فرم تماس</h2>
            <textarea
              placeholder="پیام خود را بنویسید..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              required
            />
            <button type="submit">ارسال به واتساپ</button>
          </form>
        </div>
      </section>
    </>
  );
}
