import { GradientButton } from '../GradientButton/GradiendButton';
import { NavigationItem } from './NavigationItem/NavigationItem';

import Styles from './Navigation.module.css';
import { useRef } from 'react';

const options = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Contact' },
  { name: 'Blog' },
  { name: 'Careers' },
];

export const Navigation = () => {
  const NavigationOptions = useRef<HTMLUListElement | null>(null);

  const HandleNavigationToggle = () => {
    if (!NavigationOptions.current) return;
    NavigationOptions.current.classList.toggle(`${Styles['navbar__options--active']}`);
  };

  return (
    <nav>
      <div className={`${Styles.navbar} container`}>
        <img className={Styles.navbar__logo} src='/images/logo.svg' alt='Easybank logo' />
        <ul className={Styles.navbar__options} ref={NavigationOptions}>
          {options.map((option, index) => {
            return <NavigationItem key={`nav-option-${index}`} name={option.name} />;
          })}
        </ul>
        <div className={Styles.navbar__button}>
          <GradientButton text='Request invite' />
        </div>
        <button
          className={Styles.navbar__hamburger}
          aria-label='Toggle menu visibility'
          onClick={HandleNavigationToggle}
        >
          <img src='/icons/icon-hamburger.svg' alt='' />
        </button>
      </div>
    </nav>
  );
};
