import moment from "moment";

export const getDateTimeFromTimestamp = (timestamp: number) => {
  if (timestamp === 0) return '';
  return moment.unix(Number(timestamp) / 1000).format('DD/MM/YYYY HH:mm:ss')
};
