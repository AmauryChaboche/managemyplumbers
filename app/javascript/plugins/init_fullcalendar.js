import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import swal from 'sweetalert';
// console.log(moment.now());
// console.log(moment.now().add(3600, 'seconds'));

// const display_calendar = () => {
let calendar = document.getElementById('calendar');
if (calendar) {

  document.addEventListener('DOMContentLoaded', function(){
  // $(function () {

    const updateEvent = (event) => {
      // console.log(event);
    }

    const usersHours = JSON.parse(calendar.dataset.hours);
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
      resourceLabelText: 'Plumbers',
      eventDragStop: updateEvent ,

      header: {
      right: 'timelineDay,agendaFourDay' // buttons for switching between views
      },
      editable: true,
      views: {
      agendaFourDay: {
        type: 'timelineDay',
        duration: { hours: 12 },
        buttonText: 'full day'
      }
    },

      eventClick: function(calEvent, jsEvent, view) {
        console.log(calEvent);
        // console.log(jsEvent);
        // console.log(view);
        const message = ' Client: ' + calEvent.client.first_name + ' ' + calEvent.client.last_name  +
          '\n Category: ' + calEvent.intervention.category +
          '\n Price: ' + calEvent.intervention.price +
          '\n Duration: ' + calEvent.intervention.duration +
          '\n Address: ' + calEvent.client.address ;

        swal({
          title: "Intervention modification?",
          text: message,
          buttons: {
            cancel: "Run away!",
            catch: {
              text: "Throw Pokéball!",
              value: "catch",
            },
            defeat: true,
          },
        })
        .then((value) => {
          switch (value) {

            case "defeat":
              window.location = "/clients/new";
              break;

            case "catch":
              swal("Gotcha!", "Pikachu was caught!", "success");
              break;

            default:
              swal("Got away safely!");
          }
        });
      // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
      // alert('View: ' + view.name);
      // // change the border color just for fun
      // $(this).css('border-color', 'red');

    }
    })

    // const hello = document.querySelectorAll(".fc-scroller")
    // const gg = hello[2]
    // console.log(hello);
    // console.log(gg);

    // [...temp1.querySelectorAll('tr')].map(line => line.innerText.split(': '));
  })
}

