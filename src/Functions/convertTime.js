export const convertMinToHours = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;

  const minutesStr = (minutes > 9) ? minutes : `0${minutes}`
  return hours + 'ч ' + minutesStr + 'м';
}