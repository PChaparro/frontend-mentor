import { GradientButton } from '../GradientButton/GradiendButton';
import Styles from './Hero.module.css';

export const Hero = () => {
  return (
    <header className={`${Styles.background} `}>
      <div className={`${Styles.hero} container`}>
        <div className={Styles.hero__texts}>
          <h1 className={Styles.hero__title}>Next generation digital banking</h1>
          <p className={Styles.hero__paragraph}>
            Take your funancial life online. Your Easybank account will be a a one-stop-shop for
            spending, saving, budgeting, investing, and much more
          </p>
          <GradientButton text={'Request invite'} />
        </div>
        <div className={Styles.hero__images}></div>
      </div>
    </header>
  );
};
