import { IReason } from '../../interfaces/interfaces';
import Styles from './ReasonsCard.module.css';

export const ReasonsCard = ({ icon, title, description }: IReason) => {
  return (
    <article className={Styles.card}>
      <img className={Styles.card__icon} src={icon} alt='' />
      <h3 className={Styles.card__title}>{title}</h3>
      <p className={Styles.card__description}>{description}</p>
    </article>
  );
};
