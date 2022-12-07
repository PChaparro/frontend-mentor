import { GradientButton } from '../GradientButton/GradiendButton';
import { NavigationItem } from './NavigationItem/NavigationItem';

import Styles from './Navigation.module.css';

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
        <GradientButton text='Request invite' />
      </div>
    </nav>
  );
};
