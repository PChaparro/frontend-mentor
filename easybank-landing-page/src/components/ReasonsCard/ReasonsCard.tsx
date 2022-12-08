import Styles from './ReasonsCard.module.css';

interface Props {
  icon: string;
  title: string;
  description: string;
}

export const ReasonsCard = ({ icon, title, description }: Props) => {
  return (
    <article className={Styles.card}>
      <img className={Styles.card__icon} src={icon} alt='' />
      <h3 className={Styles.card__title}>{title}</h3>
      <p className={Styles.card__description}>{description}</p>
    </article>
  );
};
