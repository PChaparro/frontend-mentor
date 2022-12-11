import { useState } from 'react';

import { JobCard } from '../../components/JobCard/JobCard';
import { JobFilter } from '../../components/JobFilter/JobFilter';
import JOBS from '../../data/data.json';
import Styles from './Home.module.css';

export const Home = () => {
  const [filters, setFilters] = useState<Array<string>>([]);

  const toggleFilter = (filter: string) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((entry) => entry !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const clearFilters = () => {
    setFilters([]);
  };

  // Filter the jobs if there are at least one active filter
  const filteredJobs =
    filters.length !== 0
      ? JOBS.filter(
          (job) =>
            job.languages.some((lang) => filters.includes(lang)) ||
            job.tools.some((tool) => filters.includes(tool)) ||
            filters.includes(job.role) ||
            filters.includes(job.level),
        )
      : JOBS;

  return (
    <>
      <div className={Styles.header}></div>
      {filters.length > 0 && <JobFilter filters={filters} clearFiltersCallback={clearFilters} />}
      <main className={Styles.jobs}>
        {filteredJobs.map((job, index) => (
          <JobCard key={`job-card-${index}`} job={job} toggleFilterCallback={toggleFilter} />
        ))}
      </main>
    </>
  );
};
