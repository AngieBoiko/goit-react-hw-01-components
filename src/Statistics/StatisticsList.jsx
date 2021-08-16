import Statistics from './Statistics';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticsList({ stats }) {
  return (
    <ul className={styles.stat_list}>
      {stats.map(item => (
        <li className={styles.item} key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}
StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
