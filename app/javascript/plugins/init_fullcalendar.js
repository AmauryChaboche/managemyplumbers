import $ from 'jquery';
import moment from 'moment';
// window.moment = moment;
import 'fullcalendar';
import 'fullcalendar-scheduler';

console.log(moment.now());
// console.log(moment.now().add(3600, 'seconds'));

// const display_calendar = () => {

//   $('#calendar').fullCalendar({
//     schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
//     events: {
//       url: '/api/v1/bookings'
//     }
//   })
// };




export { display_calendar }

