import { handleActions } from 'redux-actions';
import * as _ from 'lodash';
import * as actions from '../Actions/index';

const sortByPrice = (tickets) => (first, second) => {
  const firstParam = tickets[first].price;
  const secondParam = tickets[second].price;
  if (firstParam > secondParam) return 1;
  else if (firstParam < secondParam) return -1;
  else return 0;
};

const sortByTime = (tickets) => (first, second) => {
  const firstTicketDurations = tickets[first].segments.map(({ duration }) => duration);
  const secondTicketDurations = tickets[second].segments.map(({ duration }) => duration);

  const fastetsFirstTicket = _.min(firstTicketDurations);
  const fastetsSecondTicket = _.min(secondTicketDurations);
  if (fastetsFirstTicket > fastetsSecondTicket) return 1;
  else if (fastetsFirstTicket < fastetsSecondTicket) return -1;
  else return 0;

}

const defaultTickets = { byId: {}, allTickets: [] };

const tickets = handleActions({
  [actions.updateTicketsListSuccess]: (state, action) => {
    const newTickets = action.payload
      .filter((ticket, index) => (index < 10)); //NOTICE: ограничил число билетов
    const newById = newTickets.reduce((acc, ticket, index) => ({ ...acc, [index]: ticket }), {});
    return {
      byId: newById,
      allTickets: Object.keys(newById),
    }
  },
  [actions.updateTicketsListFailure]: () => {
    console.log('ALARM!');
    return defaultTickets;
  },
  [actions.updateTicketsListRequest]: () => {
    console.log('wait...');
    return defaultTickets;
  },
  [actions.sortTicketsList]: (state, action) => {

    const sortBy = action.payload;
    const mapSortOption = {
      'cheapest': sortByPrice,
      'fastest': sortByTime,
    }
    const sortedTickets = state.allTickets.sort(mapSortOption[sortBy](state.byId));
    return {
      byId: state.byId,
      allTickets: sortedTickets,
    }
  },

}, defaultTickets);

export default tickets;