import * as _ from 'lodash';

export const filterByStops = (ticket, stopsFilter) => {
  if (stopsFilter.length === 0) return true;
  const maxCountOfStops = _.min(stopsFilter);

  const stopsInTicket = ticket.segments.map(({ stops }) => stops.length);
  const maxCountOfStopsInTicket = _.max(stopsInTicket);

  return maxCountOfStops >= maxCountOfStopsInTicket;
};