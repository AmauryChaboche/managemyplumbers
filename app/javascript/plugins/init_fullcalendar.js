import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import 'fullcalendar';
import 'fullcalendar-scheduler';

// console.log(moment.now());
// console.log(moment.now().add(3600, 'seconds'));

// const display_calendar = () => {
$(function () {
  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    defaultView: 'timelineDay',
    // schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    events: '/api/v1/bookings',
    resources: '/api/v1/users'
        // events: [
    //   {
    //     title: 'yearstdtf',
    //     start: '2019-02-26T16:00:00'
    //     // start: '2019-02-26'
    //   }
    // ]
  })
})
// };


// export { display_calendar }
