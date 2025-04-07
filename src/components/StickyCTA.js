import { useEffect, useState } from "react";
import styles from "../styles/StickyCTA.module.css";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 3000); // نمایش بعد از ۳ ثانیه
    return () => clearTimeout(timeout);
  }, []);

  return (
    visible && (
      <div className={styles.ctaBox}>
        <a
          href="https://wa.me/+989194883039"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={20} /> پیام در واتساپ
        </a>
        <a href="tel:+989194883039" className={styles.ctaButton}>
          <FaPhone size={20} /> تماس مستقیم
        </a>
      </div>
    )
  );
}
