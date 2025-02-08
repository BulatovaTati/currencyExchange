import { Wave } from 'react-animated-text';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBaseCurrency,
  selectError,
  selectFilteredRates,
} from '../redux/currency/selectors';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import RatesList from '../components/RatesList/RatesList';
import { useEffect } from 'react';
import { fetchLatestRates } from '../redux/currency/operations';
import Filter from '../components/Filter/Filter';

const Rates = () => {
  const filteredRates = useSelector(selectFilteredRates);
  const isError = useSelector(selectError);
  const baseCurrency = useSelector(selectBaseCurrency);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLatestRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <Section>
      <Container>
        <Heading
          info
          bottom
          title={
            <Wave
              text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
              effect="fadeOut"
              effectChange={4.0}
            />
          }
        />
        <Filter />
        {filteredRates.length > 0 && <RatesList rates={filteredRates} />}
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 We cannot show current rates!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Rates;
