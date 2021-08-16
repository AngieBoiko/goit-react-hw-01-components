import styles from './TransactionsStyles.module.css';
import PropTypes from 'prop-types';

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.table_row}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
