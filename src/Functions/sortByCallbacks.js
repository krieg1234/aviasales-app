import * as _ from 'lodash';

export const sortByPrice = (tickets) => (first, second) => {
  const firstParam = tickets[first].price;
  const secondParam = tickets[second].price;
  if (firstParam > secondParam) return 1;
  else if (firstParam < secondParam) return -1;
  else return 0;
};

export const sortByTime = (tickets) => (first, second) => {
  const firstTicketDurations = tickets[first].segments.map(({ duration }) => duration);
  const secondTicketDurations = tickets[second].segments.map(({ duration }) => duration);

  const fastetsFirstTicket = _.min(firstTicketDurations);
  const fastetsSecondTicket = _.min(secondTicketDurations);
  if (fastetsFirstTicket > fastetsSecondTicket) return 1;
  else if (fastetsFirstTicket < fastetsSecondTicket) return -1;
  else return 0;

}