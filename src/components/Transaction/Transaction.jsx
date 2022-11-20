import PropTypes from 'prop-types';
import css from './Transaction.module.css';
export const Transaction = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.name}>Type</th>
          <th className={css.name}>Amount</th>
          <th className={css.name}>Currency</th>
        </tr>
      </thead>

      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id}>
          <tr>
            <td className={css.type}>{type}</td>
            <td className={css.amount}>{amount}</td>
            <td className={css.currency}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};


Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};