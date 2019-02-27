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
  const usersHours = JSON.parse(document.getElementById('calendar').dataset.hours);
  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    defaultView: 'timelineDay',
    events: '/api/v1/bookings',
    resources: '/api/v1/users',
    nowIndicator: true,
    contentHeight: 'auto',
    slotDuration:'00:15:00',
    eventClick: function(calEvent, jsEvent, view) {
      console.log(calEvent);
      console.log(jsEvent);
      console.log(view);
      alert(' Client: ' + calEvent.client.first_name + ' ' + calEvent.client.last_name  + '\n Category: ' + calEvent.intervention.category + '\n Price: ' + calEvent.intervention.price + '\n Duration: ' + calEvent.intervention.price + '\n Address: ' + calEvent.intervention.price);
    // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
    // alert('View: ' + view.name);

    // // change the border color just for fun
    // $(this).css('border-color', 'red');

  }
  })
})

