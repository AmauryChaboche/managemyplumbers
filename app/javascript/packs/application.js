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

import { sweetalert_simple_validation } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-simple_validation")){
  sweetalert_simple_validation();
}

import { sweetalert_double_validation } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-double_validation")){
  sweetalert_double_validation();
}

import { sweetalert_triple_validation } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-triple_validation")){
  sweetalert_triple_validation();
}

import { sweetalert_triple_validation_full_callendar } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-triple_validation_full_callendar")){
  sweetalert_triple_validation_full_callendar();
}

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






