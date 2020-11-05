import { createAction } from 'redux-actions';
import getTickets from '../Functions/getTickets';
import makeFakeTicketsList from '../Functions/makeFakeTicketsList'

export const updateTicketsListRequest = createAction('TICKETS_LIST_UPDATE_REQUEST');
export const updateTicketsListSuccess = createAction('TICKETS_LIST_UPDATE_SUCCESS');
export const updateTicketsListFailure = createAction('TICKETS_LIST_UPDATE_FAILURE');

export const updateTicketsList = async (dispatch) => {
  dispatch(updateTicketsListRequest());
  try {
    const { tickets } = await getTickets();
    dispatch(updateTicketsListSuccess(tickets));
  } catch (e) {
    dispatch(updateTicketsListFailure());
    const fake = makeFakeTicketsList();
    // dispatch(updateTicketsListSuccess(fake));
  }
};

export const buildTicketsList = createAction('TICKETS_LIST_BUILD');
export const sortTicketsList = createAction('TICKETS_LIST_SORT');
export const addFilter = createAction('FILTER_ADD');
export const removeFilter = createAction('FILTER_REMOVE');
