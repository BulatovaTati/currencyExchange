import { useDispatch } from 'react-redux';
import Select from 'react-select';
import symbols from './symbols.json';

import { setBaseCurrency } from '../../redux/currency/slice';

import styles from './SelectRates.module.css';
import './ReactSelect.css';

const SelectRates = ({ baseCurrency }) => {
  const dispatch = useDispatch();

  const handleSelect = options => {
    dispatch(setBaseCurrency(options.value));
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      <Select
        onChange={handleSelect}
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        className={styles.select}
        classNamePrefix="react-select"
        options={symbols}
        isSearchable
      />
    </div>
  );
};

export default SelectRates;
