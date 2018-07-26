import moment from 'moment';

export const displayDate = (date) => date ? moment(date).format('L') : '';

export const toDate = (date) => date ? moment(date).toDate() : date;

export const compareDates = function compareDates(property, order = 'asc') {
    let func;
    if (order.startsWith('desc')) {
        func = (a, b) => b[property].valueOf() - a[property].valueOf();
    } else {
        func = (a, b) => a[property].valueOf() - b[property].valueOf();
    }
    return func;
}