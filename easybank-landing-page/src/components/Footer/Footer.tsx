import { GradientButton } from '../GradientButton/GradiendButton';
import Styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={Styles['footer-background']}>
      <div className={`${Styles.footer} container`}>
        <div className={`${Styles.footer__column} ${Styles['footer__column-spaced']}`}>
          <img
            src='/frontend-mentor/easybank-landing-page/images/logo-white.svg'
            alt='Easybank logo'
          />
          <div className={Styles.footer__socials}>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img
                src='/frontend-mentor/easybank-landing-page/icons/icon-facebook.svg'
                alt='Find Easybank on facebook'
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img
                src='/frontend-mentor/easybank-landing-page/icons/icon-youtube.svg'
                alt='Find Easybank on youtube'
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img
                src='/frontend-mentor/easybank-landing-page/icons/icon-twitter.svg'
                alt='Find Easybank on twitter'
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img
                src='/frontend-mentor/easybank-landing-page/icons/icon-pinterest.svg'
                alt='Find Easybank on pinterest'
              />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img
                src='/frontend-mentor/easybank-landing-page/icons/icon-instagram.svg'
                alt='Find Easybank on intagram'
              />
            </a>
          </div>
        </div>
        <div className={Styles.footer__column}>
          <ul className={Styles.footer__options}>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
          </ul>
        </div>
        <div className={Styles.footer__column}>
          <ul className={Styles.footer__options}>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Suport</a>
            </li>
            <li>
              <a href='#'>Provacy Policy</a>
            </li>
          </ul>
        </div>
        <div className={`${Styles.footer__column} ${Styles['footer__column-spaced']}`}>
          <GradientButton text='Request invite' />
          <p className={Styles.footer__copyright}>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
