import Styles from './NavigationItem.module.css';

interface Props {
  name: string;
}

export const NavigationItem = ({ name }: Props) => {
  return (
    <li className={Styles.navbar__option}>
      <a className={Styles.navbar__link} href='#'>
        {name}
      </a>
    </li>
  );
};
