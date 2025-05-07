import Link from "next/link";
import { useTheme } from "../context/ThemeContext";

import styles from "../styles/Footer.module.css";
import { FaTelegram, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`${styles.footer} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.section}>
          <img
            src="/images/logo.png"
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
            {/* <li>
              <Link href="#features">چرا ما؟</Link>
            </li> */}
            <li>
              <Link href="/services">خدمات</Link>
            </li>
            <li>
              <Link href="/products">محصولات</Link>
            </li>
            <li>
              <Link href="#blog">مقالات</Link>
            </li>
            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.title}>تماس با ما</h3>
          <p>تلفن: 09194883039</p>
          <p>تلفن: 09194883039</p>
          <div className={styles.socials}>
            آدرس: تهران میدان جمهوری خیابان دامپزشکی خیابان قصرالدشت پلاک 368 فروشگاه برتر
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
