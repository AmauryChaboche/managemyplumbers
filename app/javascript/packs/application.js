import "bootstrap";
import { initMapbox } from "../plugins/init_mapbox";

// import "../plugins/flatpickr";
import { display_calendar } from "../plugins/init_fullcalendar";
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import { initSelect2 } from '../plugins/init_select2';
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import calendrier from '../plugins/flatpickr';
import { chooseAddress } from "../plugins/init_mapbox";
import "../plugins/flatpickr";
import { sweetalert } from '../plugins/sweetalert';

initMapbox();
calendrier();
initSelect2();
sweetalert();
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


$( document ).ready(function() {
    console.log( "ready!" );
});
// document.addEventListener('DOMContentLoaded', function(){
//     console.log( "ready!2" );

// })



// console.log('11');
// console.log('yay');



