import { CONFIG } from '../../config/config';
const { BASE_URL } = CONFIG;

import Styles from './JobFilter.module.css';

interface Props {
  filters: Array<string>;
}

export const JobFilter = ({ filters }: Props) => {
  return (
    <div className={Styles.filter}>
      {filters.map((filter, index) => (
        <p key={`jobs-filter-${index}`} className={Styles.filter__item}>
          <span>{filter}</span>
          <button aria-label={`Remove ${filter} filter`}>
            <img src={`${BASE_URL}/icons/icon-remove.svg`} alt='' />
          </button>
        </p>
      ))}
    </div>
  );
};
