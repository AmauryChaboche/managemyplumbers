import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';

const display_calendar = () => {

  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    defaultView: 'timelineDay'
  })

};


export { display_calendar }

