import { JobCard } from '../../components/JobCard/JobCard';
import JOBS from '../../data/data.json';
import Styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <div className={Styles.header}></div>
      <main className={Styles.jobs}>
        {JOBS.map((job, index) => (
          <JobCard key={`job-card-${index}`} job={job} />
        ))}
      </main>
    </>
  );
};
