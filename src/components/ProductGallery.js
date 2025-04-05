import { useState } from "react";
import styles from "../styles/ProductGallery.module.css";

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <img src={selected} alt="تصویر محصول" />
      </div>
      <div className={styles.thumbnails}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={"تصویر " + (i + 1)}
            onClick={() => setSelected(img)}
            className={img === selected ? styles.active : ""}
          />
        ))}
      </div>
    </div>
  );
}
