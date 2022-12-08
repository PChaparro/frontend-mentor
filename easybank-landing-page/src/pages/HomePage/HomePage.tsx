import { Hero } from '../../components/Hero/Hero';

import Styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <section className={Styles['space-placeholder']}></section>
    </>
  );
};
