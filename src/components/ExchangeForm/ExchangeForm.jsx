import { useDispatch } from 'react-redux';
import { RiExchangeDollarFill } from 'react-icons/ri';
import { fetchExchangeCurrency } from '../../redux/currency/operations';
import styles from './ExchangeForm.module.css';

const ExchangeForm = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    const value = e.target.elements.currency.value;
    if (value === '') return;

    const [amount, from, , to] = value.toLowerCase().split(' ');

    dispatch(fetchExchangeCurrency({ amount, from, to }));
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        name="currency"
        title="Request format 15 USD in UAH"
        className={styles.input}
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
      />
    </form>
  );
};

export default ExchangeForm;
