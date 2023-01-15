import moment from 'moment';

export const getid = (id: string) => document.getElementById(id);
export const time_format = (time: number) => moment.unix(time).format('m:ss');
