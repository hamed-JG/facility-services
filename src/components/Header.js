import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.controls}>
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <div className={`${styles.bar} ${isOpen ? styles.bar1 : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar2 : ""}`}></div>
          <div className={`${styles.bar} ${isOpen ? styles.bar3 : ""}`}></div>
        </div>

        <button className={styles.themeToggle} onClick={toggleTheme}>
          {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
        <ul>
          <li>
            <Link href="/">خانه</Link>
          </li>
          <li>
            <Link href="#services">خدمات</Link>
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
          <div className={styles.cta}>
            <li>wh</li>
            <li>inst</li>
            <li>call</li>
          </div>
        </ul>
      </nav>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="دما پلاس" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
