import axios from 'axios';

const getTickets = async () => {
  const config = await axios.get('https://front-test.beta.aviasales.ru/search');
  const { data } = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${config.data.searchId}`);
  const { tickets, stop } = data;
  return { tickets, stop };
}

export default getTickets;