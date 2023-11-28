import moment from 'moment';


export const hoursMonth = ( date ) => {
    const todayMonth = moment( date );
     
    return todayMonth.format('HH:mm a | MMMM Do');
}
