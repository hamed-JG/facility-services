import { useState } from "react";
import styles from "../styles/ContactPage.module.css";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "نام را وارد کنید";
    if (!/^\d{11}$/.test(form.phone)) errs.phone = "شماره موبایل معتبر نیست";
    if (!form.service.trim()) errs.service = "نوع خدمات را وارد کنید";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const message = `سلام، من ${form.name} هستم. شماره من ${form.phone} هست و می‌خواهم از خدمات ${form.service} استفاده کنم.`;
    const encoded = encodeURIComponent(message);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
    window.open(`https://wa.me/<YOUR_NUMBER>?text=${encoded}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>درخواست تماس</h2>
          <input
            type="text"
            className={styles.inputField}
            placeholder="نام شما"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <input
            type="text"
            className={styles.inputField}
            placeholder="شماره همراه"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <span className={styles.error}>{errors.phone}</span>}

          <input
            type="text"
            className={styles.inputField}
            placeholder="نوع خدمات درخواستی"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          />
          {errors.service && (
            <span className={styles.error}>{errors.service}</span>
          )}

          <button className={styles.submitButton} onClick={handleSubmit}>
            ارسال به واتساپ
          </button>

          {success && (
            <p style={{ color: "green", marginTop: "1rem" }}>
              ✅ اطلاعات با موفقیت ارسال شد.
            </p>
          )}
        </div>

        <div className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>درباره ما</h2>
          <p>
            ما با سال‌ها تجربه در ارائه خدمات تعمیر و نگهداری دستگاه‌های سرمایشی
            و گرمایشی، آماده‌ایم تا با بهترین کیفیت در کنار شما باشیم. هدف ما
            ارائه خدمات سریع، با قیمت مناسب و پشتیبانی واقعی است.
          </p>
        </div>
      </div>

      <div className={styles.socials}>
        <a
          className={styles.socialLink}
          href="https://wa.me/<YOUR_NUMBER>"
          target="_blank"
        >
          <FaWhatsapp style={{ marginLeft: "0.5rem" }} /> واتساپ
        </a>
        <a
          className={styles.socialLink}
          href="https://instagram.com/<YOUR_PAGE>"
          target="_blank"
        >
          <FaInstagram style={{ marginLeft: "0.5rem" }} /> اینستاگرام
        </a>
        <a className={styles.socialLink} href="tel:+98XXXXXXXXXX">
          <FaPhone style={{ marginLeft: "0.5rem" }} /> تماس مستقیم
        </a>
      </div>
    </div>
  );
}
