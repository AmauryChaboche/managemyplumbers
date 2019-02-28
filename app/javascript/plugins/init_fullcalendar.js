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
  const eventFire = (el, etype) => {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  };

  const formating = (array) => {
    const string = new Date(array[0],array[1],array[2],array[3] + 1,array[4],array[5],array[6]);
    console.log(string);
    return string;
  };

  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });

    const updateEvent = (event) => {
        console.log(event);
        const start_date = event.start._i;
        // console.log(start_date.hasZone());
        const end_date = event.end._i;
        const book_id = event.id
        $.ajax({
            headers: {
          'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
            url: `/bookings/${book_id}`,
            method: 'PATCH',
            // beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            data: {
              booking: {
                start_date: formating(start_date),
                end_date: formating(end_date),
                id: book_id
              }
            },
            dataType: 'js'
          });
      };

  const displayImage = () => {
    const hello = document.querySelectorAll(".fc-scroller");
    const gg = [].slice.call(hello)
    // console.log(hello);
    const gg2 = gg[2];
    // console.log(gg[2]);
    const momo = [...gg2.querySelectorAll('tr')].map(line => line.innerText.split(': ')[1]);
    // console.log(momo);

    const popo = [...document.querySelectorAll(".fc-widget-content .fc-cell-content")];
    popo.forEach( (element) => {
      const urli = element.innerText.split(': ')[1];
      const text = element.innerText.split(': ')[0];
      element.innerText = text ;
      element.style.backgroundImage = `url(${urli})`;
      // console.log(element);
    });
  }


  const usersHours = JSON.parse(document.getElementById('calendar').dataset.hours);

  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',

    events: '/api/v1/bookings',
    resources: '/api/v1/users',
    resourceAreaWidth: "20%" ,

    header: {
      left: 'today prev,next',
      center: 'title',
      right: 'timelineDay,timelineWeek'
    },
    defaultView: 'timelineDay',

    nowIndicator: true,
    contentHeight: 'auto',
    slotDuration:'00:15:00',
    minTime: '09:00:00',
    maxTime: '19:00:00',
    resourceLabelText: 'Plumbers',
    eventResize: function(calEvent, jsEvent, ui, view) {
      updateEvent(calEvent);
    },
    eventDrop: function(calEvent, jsEvent, ui, view) {
      updateEvent(calEvent);
    },
    // eventAfterAllRender: displayImage,
    viewRender: displayImage,

    header: {
    right: 'timelineDay,agendaFourDay' // buttons for switching between views
    },
    editable: true,
    eventClick: function(calEvent, jsEvent, view) {
      // console.log(calEvent);
      console.log(calEvent);
      // console.log(view);
      alert(' Client: ' + calEvent.client.first_name + ' ' + calEvent.client.last_name  +
        '\n Category: ' + calEvent.intervention.category +
        '\n Price: ' + calEvent.intervention.price +
        '\n Duration: ' + calEvent.intervention.duration +
        '\n Address: ' + calEvent.client.address) +
        '\n Start at: ' + calEvent.start +
        '\n End at: ' + calEvent.end ;

  }
  })

})






