import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "خانه", href: "/" },
    { label: "خدمات", href: "/services" },
    { label: "محصولات", href: "/products" },
    { label: "مقالات", href: "/blog" },
    { label: "تماس با ما", href: "/contact" },
  ];

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
          {navItems.map((item, i) => (
            <Link
              onClick={() => setIsOpen(false)}
              key={i}
              href={item.href}
              className={styles.navLink}
            >
              {item.label}
            </Link>
          ))}
          <div className={styles.cta}>
            <FaPhone className={styles.icon} />
            <IoLogoWhatsapp className={styles.icon} />
            <FaSquareInstagram className={styles.icon} />
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
