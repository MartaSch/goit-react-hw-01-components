import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
const TransactionHistory = ({transactions}) => {
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  {transactions.map(transaction => (
    <tbody  key = {transaction.id}>
    <tr>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.currency}</td>
    </tr>
    </tbody>
  ))}
  </table>
    );
};

TransactionHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}
export default TransactionHistory;