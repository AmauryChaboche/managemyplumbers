import "bootstrap";

import { display_calendar } from "../plugins/init_fullcalendar";

// if (document.getElementById('calendar') ){
//   display_calendar();
// }


import {initMapbox} from "../plugins/init_mapbox";

initMapbox();

import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import "../plugins/flatpickr";
import { display_calendar } from "../plugins/init_fullcalendar";

if (document.getElementById('calendar') ){
  // display_calendar();
  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',

    events: [
      {
        title: 'Event Title',
        start: 1551193453838,
        end: 1551193453839
      }
    ]
  });
}


