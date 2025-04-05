import { useEffect, useState } from "react";
import {
  AiFillLike,
  AiFillDislike,
  AiFillStar,
} from "react-icons/ai";
import styles from "../styles/ProductReviews.module.css";

export default function ProductReviews({ reviews, productId }) {
  const filteredReviews = reviews.filter((r) => r.productId === productId);

  const [visibleCount, setVisibleCount] = useState(5);
  const [expanded, setExpanded] = useState(false);
  const [likes, setLikes] = useState({});

  useEffect(() => {
    const storedExpanded = localStorage.getItem(
      `reviews-expanded-${productId}`
    );
    if (storedExpanded === "true") {
      setExpanded(true);
      setVisibleCount(filteredReviews.length);
    }
  }, [productId, filteredReviews.length]);

  const toggleExpanded = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    localStorage.setItem(
      `reviews-expanded-${productId}`,
      newExpanded.toString()
    );
    setVisibleCount(newExpanded ? filteredReviews.length : 5);
  };

  const handleLike = (id, type) => {
    setLikes((prev) => {
      const current = prev[id] || { like: 0, dislike: 0 };
      return {
        ...prev,
        [id]: {
          ...current,
          [type]: current[type] + 1,
        },
      };
    });
  };

  if (filteredReviews.length === 0) return null;

  return (
    <section className={styles.reviews} id="reviews">
      <div className={styles.grid}>
        {filteredReviews.slice(0, visibleCount).map((review) => (
          <div key={review.id} className={`${styles.card} fadeInUp`}>
            {/* <img
              src={review.avatar}
              alt={review.name}
              className={styles.avatar}
            /> */}
            <div className={styles.content}>
              <div className={styles.name}>{review.name}</div>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <AiFillStar key={i} className={styles.star} />
                ))}
              </div>
              <p className={styles.text}>{review.comment}</p>
            </div>
            <div className={styles.actions}>
              <button onClick={() => handleLike(review.id, "like")}>
                {likes[review.id]?.like || 0}
                <AiFillLike />
              </button>
              <button onClick={() => handleLike(review.id, "dislike")}>
                {likes[review.id]?.dislike || 0}
                <AiFillDislike />
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredReviews.length > 5 && (
        <button onClick={toggleExpanded} className={styles.toggleBtn}>
          {expanded ? "بستن" : "مشاهده بیشتر"}
        </button>
      )}
    </section>
  );
}
