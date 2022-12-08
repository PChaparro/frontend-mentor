import { IArticle } from '../../interfaces/interfaces';
import Styles from './ArticleCard.module.css';

export const ArticleCard = ({ image, author, title, brief }: IArticle) => {
  return (
    <article className={Styles.card}>
      <img className={Styles.card__image} src={image} alt='' />
      <div className={Styles.card__body}>
        <p className={Styles.card__author}>By {author}</p>
        <h3 className={Styles.card__title}>{title}</h3>
        <p className={Styles.card__brief}>{brief}</p>
      </div>
    </article>
  );
};
