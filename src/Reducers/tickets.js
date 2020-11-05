import { handleActions } from 'redux-actions';
import * as _ from 'lodash';

import * as actions from '../Actions/index';
import { sortByPrice, sortByTime } from '../Functions/sortByCallbacks';
import { filterByStops } from '../Functions/filterCallbacks';

const defaultTickets = { byId: {}, allTickets: [], buildedTicketsList: [], sortOption: 'cheapest', filters: { byStops: [] } };

const tickets = handleActions({
  [actions.updateTicketsListSuccess]: (state, action) => {
    const newTickets = action.payload.filter((ticket, index) => (index < 10)); //NOTICE: ограничил число билетов
    const newById = newTickets.reduce((acc, ticket, index) => ({ ...acc, [index]: ticket }), {});
    const newAllTickets = Object.keys(newById);



    return {
      ...state,
      byId: newById,
      allTickets: newAllTickets,
    }
  },
  [actions.updateTicketsListFailure]: () => { //NOTICE: перенеси в статус запроса
    console.log('ALARM!');
    return defaultTickets;
  },
  [actions.updateTicketsListRequest]: () => { //NOTICE: перенеси в статус запроса
    console.log('wait...');
    return defaultTickets;
  },
  [actions.sortTicketsList]: (state, action) => {
    const newSortOption = action.payload;
    return {
      ...state,
      sortOption: newSortOption,
    }
  },
  [actions.addFilter]: (state, action) => {
    const { filterType, value } = action.payload;
    const newState = {
      ...state,
      filters: {
        ...state.filters,
        [filterType]: [...state.filters[filterType], value],
      }
    }
    return newState;
  },
  [actions.removeFilter]: (state, action) => {
    const { filterType, value } = action.payload;
    const newState = {
      ...state,
      filters: {
        ...state.filters,
        [filterType]: state.filters[filterType].filter((v) => (v !== value))
      }
    };
    return newState;
  },
  [actions.buildTicketsList]: (state) => {

    const mapFilters = {
      'byStops': filterByStops,
    }
    const filtersTypes = Object.keys(state.filters);
    const filtredTickets = state.allTickets.filter((ticket) => {
      const results = [];
      filtersTypes.forEach((filter) => {
        results.push(mapFilters[filter](state.byId[ticket], state.filters[filter]));
      });
      return !results.includes(false);
    })

    const sortBy = state.sortOption;
    const mapSortOption = {
      'cheapest': sortByPrice,
      'fastest': sortByTime,
    }
    const sortedTickets = filtredTickets.sort(mapSortOption[sortBy](state.byId));


    return {
      ...state,
      buildedTicketsList: sortedTickets,
    }
  }
}, defaultTickets);

export default tickets;