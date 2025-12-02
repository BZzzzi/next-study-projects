import { SizeReviewTypeItems } from "@/type/sizeReviewType";
import styles from "@/styles/SizeReviewList.module.css";

function formatDate(date: Date) {
  const MM = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  const YYYY = String(date.getUTCFullYear());

  return `${YYYY}. ${MM}. ${dd}.`;
}

const labels = {
  sex: {
    male: "남자",
    female: "여자",
  },
  fit: {
    small: "작음",
    good: "적당함",
    big: "큼",
  },
};

export default function SizeReviewList({
  sizeReview,
}: {
  sizeReview: SizeReviewTypeItems;
}) {
  return (
    <ul className={styles.sizeReviewList}>
      {sizeReview.results.map((sizeReview) => (
        <li key={sizeReview.id} className={styles.sizeReview}>
          <div>
            <div className={styles.date}>
              {formatDate(new Date(sizeReview.createdAt))}
            </div>
            <div className={styles.profile}>
              ({labels.sex[sizeReview.sex]} {sizeReview.height}cm 기준){" "}
              {sizeReview.size}
            </div>
          </div>
          <div className={styles.fit}>{labels.fit[sizeReview.fit]}</div>
        </li>
      ))}
    </ul>
  );
}
