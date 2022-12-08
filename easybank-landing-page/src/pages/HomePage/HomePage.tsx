import { Hero } from '../../components/Hero/Hero';

import Styles from './HomePage.module.css';
import REASONS from './data/reasons.data.json';
import ARTICLES from './data/articles.data.json';
import { ReasonsCard } from '../../components/ReasonsCard/ReasonsCard';
import { ArticleCard } from '../../components/ArticleCard/ArticleCard';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <section className={`${Styles['section']} ${Styles['section--dark']}`}>
        <div className='container'>
          <h2 className={Styles.section__title}>Why choose EasyBank?</h2>
          <p className={Styles.section__paragraph}>
            We leverage Open Banking to rurn your bank account into your financial hub.
          </p>
          <p className={Styles.section__paragraph}>Control your finances like never before.</p>
          <div className={Styles['grid-container']}>
            {REASONS.map((reason, index) => {
              return (
                <ReasonsCard
                  key={`reason-card-${index}`}
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className={Styles.section}>
        <div className='container'>
          <h2 className={Styles.section__title}>Latest Articles</h2>
          <div className={Styles['grid-container']}>
            {ARTICLES.map((article, index) => {
              return (
                <ArticleCard
                  key={`article-card-${index}`}
                  image={article.image}
                  author={article.author}
                  title={article.title}
                  brief={article.brief}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};