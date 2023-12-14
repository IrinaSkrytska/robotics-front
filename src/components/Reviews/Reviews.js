import css from "./Reviews.module.css";
import bgMiddleReviewIcon from "../icons/bg_middle_review.svg";
import middleReviewIcon from "../icons/middle_review_icon.svg";
import leftReviewBg from "../icons/leftReviewBg.svg";
import leftReview from "../icons/leftReview.svg";
import rightReviewBg from "../icons/rightReviewBg.svg";
import rightReview from "../icons/rightReview.svg";
import quotes from "../icons/quotes.svg";
import personLeftIcon from "../icons/person-left-icon.svg";

export default function Reviews() {
  return (
    <div className={css.reviews_thumb}>
      <h2 className={css.reviews_title}>Відгуки</h2>
      <ul className={css.reviews_list}>
        <li className={css.review}>
          <div className={css.review_background_left_thumb}>
            <img
              alt="review_bg"
              className={css.review_background_left}
              src={leftReviewBg}
            />
            <img
              alt="review"
              className={css.review_icon_left}
              src={leftReview}
            />{" "}
            <img
              alt="review_preson"
              className={css.person_left_icon}
              src={personLeftIcon}
            />
            <div className={css.review_person_thumb_left}>
              <div className={css.review_text_side}>
                <p className={css.review_title_side}>Ім'я та Прізвище</p>
                <p className={css}>Посада</p>
                <img alt="quotes" src={quotes} />
                <p className={css.review_text_side}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cursus nibh mauris, nec turpis orci lectus maecenas.
                  Suspendisse sed magna eget nibh in turpis. Consequat duis diam
                  lacus arcu. Faucibus venenatis felis id augue sit cursus
                  pellentesque enim
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className={css.review}>
          <div className={css.review_background_middle_thumb}>
            <img
              alt="review background"
              className={css.review_background_middle}
              src={bgMiddleReviewIcon}
            />
            <img
              alt="review"
              className={css.review_icon_middle}
              src={middleReviewIcon}
            />
            <p></p>
            <p></p>
            {/* <img /> */}
            <p></p>
          </div>
        </li>
        <li className={css.review}>
          <div className={css.review_background_right_thumb}>
            <img
              alt="revew background"
              className={css.review_background_right}
              src={rightReviewBg}
            />
            <img
              alt="review"
              className={css.review_icon_right}
              src={rightReview}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
