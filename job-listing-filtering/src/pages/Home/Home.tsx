import { useState } from 'react';

import { JobCard } from '../../components/JobCard/JobCard';
import { JobFilter } from '../../components/JobFilter/JobFilter';
import JOBS from '../../data/data.json';
import Styles from './Home.module.css';

export const Home = () => {
  const [filters, setFilters] = useState<Array<string>>(['Frontend']);

  // Filter the jobs if there are at least one active filter
  const filteredJobs =
    filters.length !== 0
      ? JOBS.filter(
          (job) =>
            job.languages.some((lang) => filters.includes(lang)) ||
            job.tools.some((tool) => filters.includes(tool)) ||
            filters.includes(job.level) ||
            filters.includes(job.level),
        )
      : JOBS;

  console.log(filteredJobs);

  return (
    <>
      <div className={Styles.header}></div>
      <JobFilter filters={filters} />
      <main className={Styles.jobs}>
        {JOBS.map((job, index) => (
          <JobCard key={`job-card-${index}`} job={job} />
        ))}
      </main>
    </>
  );
};
