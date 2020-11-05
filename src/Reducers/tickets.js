import { handleActions } from 'redux-actions';
import { uniqueId } from 'lodash';
import * as actions from '../Actions/index';

const defaultTickets = { byId: {}, allTickets: [] };

const tickets = handleActions({
  [actions.updateTicketsListSuccess]: (state, action) => {
    const newTickets = action.payload.filter((ticket, index) => (index < 10));
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
  }
}, defaultTickets);

export default tickets;