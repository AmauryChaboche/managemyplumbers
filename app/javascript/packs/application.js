import "bootstrap";
import { initMapbox } from "../plugins/init_mapbox";

import "../plugins/flatpickr";
import { display_calendar } from "../plugins/init_fullcalendar";
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import { initSelect2 } from '../plugins/init_select2';

import bookingDuration from '../plugins/booking_duration';
import { chooseAddress } from "../plugins/init_mapbox";

initMapbox();
initSelect2();

bookingDuration();
// if (document.getElementById('calendar') ){
//   // display_calendar();
//   $('#calendar').fullCalendar({
//     schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',

//     events: [
//       {
//         title: 'Event Title',
//         start: 1551193453838,
//         end: 1551193453839
//       }
//     ]
//   });
// }




