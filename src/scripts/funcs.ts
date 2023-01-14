import moment from 'moment';

const prependZeros = (t: number | string) => (('' + t).length === 1 ? '0' : '') + t;
export const getid = (id: string) => document.getElementById(id);
export const time_format = (time: number) => moment.unix(time).format('m:ss');
