import styles from "../styles/Footer.module.css";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`${styles.footer} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.section}>
          <img
            src="/images/logo-footer.png"
            alt="لوگوی سایت"
            className={styles.logo}
          />
          <p className={styles.description}>
            نصب و تعمیر انواع کولر و آبگرمکن با بهترین قیمت و سریع‌ترین زمان در
            سراسر شهر شما.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>دسترسی سریع</h3>
          <ul className={styles.links}>
            <li>
              <a href="#features">چرا ما؟</a>
            </li>
            <li>
              <a href="#services">خدمات</a>
            </li>
            <li>
              <a href="#products">محصولات</a>
            </li>
            <li>
              <a href="#blog">مقالات</a>
            </li>
            <li>
              <a href="#contact">تماس با ما</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>تماس با ما</h3>
          <p>تلفن: ۰۹۱۲۱۲۳۴۵۶۷</p>
          <p>ایمیل: info@example.com</p>
          <div className={styles.socials}>
            <a href="#">
              <img src="/icons/telegram.svg" alt="تلگرام" />
            </a>
            <a href="#">
              <img src="/icons/instagram.svg" alt="اینستاگرام" />
            </a>
            <a href="#">
              <img src="/icons/whatsapp.svg" alt="واتساپ" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        © {new Date().getFullYear()} تمام حقوق محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
