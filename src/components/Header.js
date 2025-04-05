import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/logo-footer.png" alt="لوگوی سایت" />
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <a href="/">خانه</a>
          </li>
          <li>
            <a href="#services">خدمات</a>
          </li>
          <li>
            <a href="/products">محصولات</a>
          </li>
          <li>
            <a href="#blog">مقالات</a>
          </li>
          <li>
            <a href="#contact">تماس با ما</a>
          </li>
        </ul>
      </nav>

      <div className={styles.controls}>
        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <div className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
