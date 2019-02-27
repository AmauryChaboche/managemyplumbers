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
    contentHeight: 'auto'
  })
})

