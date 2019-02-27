import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import 'fullcalendar';
import 'fullcalendar-scheduler';

// console.log(moment.now());
// console.log(moment.now().add(3600, 'seconds'));

// const display_calendar = () => {
document.addEventListener('DOMContentLoaded', function(){
// $(function () {
  const usersHours = JSON.parse(document.getElementById('calendar').dataset.hours);
  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
    defaultView: 'timelineDay',
    events: '/api/v1/bookings',
    resources: '/api/v1/users',
    nowIndicator: true,
    contentHeight: 'auto',
    slotDuration:'00:15:00',
    minTime: '09:00:00',
    maxTime: '19:00:00',
    eventClick: function(calEvent, jsEvent, view) {
      console.log(calEvent);
      console.log(jsEvent);
      console.log(view);
      alert(' Client: ' + calEvent.client.first_name + ' ' + calEvent.client.last_name  + '\n Category: ' + calEvent.intervention.category + '\n Price: ' + calEvent.intervention.price + '\n Duration: ' + calEvent.intervention.duration + '\n Address: ' + calEvent.client.address);
    // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
    // alert('View: ' + view.name);
    // // change the border color just for fun
    // $(this).css('border-color', 'red');

  }
  })

  const hello = document.querySelectorAll(".fc-scroller")
  const gg = hello[2]
  console.log(hello);
  console.log(gg);
})

