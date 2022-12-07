import Styles from './Navigation.module.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

const options = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Contact' },
  { name: 'Blog' },
  { name: 'Careers' },
];

export const Navigation = () => {
  return (
    <nav>
      <div className={`${Styles.navbar} container`}>
        <img className={Styles.navbar__logo} src='/images/logo.svg' alt='Easybank logo' />
        <ul className={Styles.navbar__options}>
          {options.map((option, index) => {
            return <NavigationItem key={`nav-option-${index}`} name={option.name} />;
          })}
        </ul>
        <button className={Styles.navbar__button}>Request invite</button>
      </div>
    </nav>
  );
};
