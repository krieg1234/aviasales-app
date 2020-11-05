import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../Actions/index';

const defaultTickets = { byId: {}, allTickets: [] };

const tickets = handleActions({

}, defaultTickets);

export default combineReducers({
  tickets
});