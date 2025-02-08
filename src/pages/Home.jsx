import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { fetchBaseCurrency } from '../redux/currency/operations';
import { setBaseCurrency } from '../redux/currency/slice';
import ExchangeForm from '../components/ExchangeForm/ExchangeForm';


const Home = () => {
  const isError = false;
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;
      dispatch(fetchBaseCurrency(crd));
    }

    function error(err) {
      dispatch (setBaseCurrency("USD"));

    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />
<ExchangeForm/>
        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
