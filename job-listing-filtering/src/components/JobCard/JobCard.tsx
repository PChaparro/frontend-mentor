import { CONFIG } from '../../config/config';
const { BASE_URL } = CONFIG;
import { IJob } from '../../interfaces/interfaces';
import Styles from './JobCard.module.css';

interface Props {
  job: IJob;
}

export const JobCard = ({ job }: Props) => {
  return (
    <article className={`${Styles.job} ${job.featured && Styles['job--featured']}`}>
      <div className={Styles.job__content}>
        <img className={Styles.job__logo} src={`${BASE_URL}/images/${job.logo}`} alt='' />
        <div className={Styles.job__information}>
          <div className={Styles.job__advertiser}>
            <p className={Styles.job__company}>{job.company}</p>
            {job.new && (
              <span className={`${Styles.job__annotation} ${Styles['job__annotation--new']}`}>
                NEW!
              </span>
            )}
            {job.featured && (
              <span className={`${Styles.job__annotation} ${Styles['job__annotation--featured']}`}>
                FEATURED
              </span>
            )}
          </div>
          <p className={Styles.job__position}>{job.position}</p>
          <div className={Styles.job__details}>
            <p className={Styles.job__detail}>{job.postedAt}</p>
            <p className={Styles.job__detail}>{job.contract}</p>
            <p className={Styles.job__detail}>{job.location}</p>
          </div>
        </div>
      </div>
      <div className={Styles.job__tags}>
        {[job.role, job.level, ...job.languages, ...job.tools].map((tag, index) => (
          <span key={`job-tag-${index}`} className={Styles.job__tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};
