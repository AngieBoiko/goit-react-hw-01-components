import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function StatisticSection({ title, children }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}
StatisticSection.propTypes = {
  title: PropTypes.string.isRequired,
};
