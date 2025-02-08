import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from '../../redux/filter/selectors';
import { setFilter } from '../../redux/filter/slice';
import styles from './Filter.module.css';

const Filter = () => {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <input
      value={filterValue}
      onChange={handleChange}
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
    />
  );
};

export default Filter;
