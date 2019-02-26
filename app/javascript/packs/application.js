import "bootstrap";
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
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
