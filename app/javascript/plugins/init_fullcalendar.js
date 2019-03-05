import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import swal from 'sweetalert';
// console.log(moment.now());
// console.log(moment.now().add(3600, 'seconds'));

 // const element = document.getElementById('calendar');
//  if(element) { }

// const display_calendar = () => {
let calendar = document.getElementById('calendar');
if (calendar) {

    const buttonRight = document.querySelector('.button-right');
    const buttonLeft = document.querySelector('.button-left');

    buttonRight.addEventListener('click', event => {
      $('#calendar').fullCalendar('getCalendar').next();
    });

    buttonLeft.addEventListener('click', event => {
      $('#calendar').fullCalendar('getCalendar').prev();
    });

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
    // console.log(string);
    return string;
  };

//   const bookingAnimation = document.getElementById('intervention.created_at').last.animate(
//     { transform: background: #3CB371 !important;
//     });

// const bookingAnimation = document.getElementById('fc-timeline-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable').last.animate(
//     { transform: background: green !important;
//     });



  $.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
  });

    const updateEvent = (event) => {
        // console.log(event);
        const start_date = event.start._i;
        console.log(event);
        const end_date = event.end._i;
        const book_id = event.id
        const plomb_id = event.resourceId;
        console.log(plomb_id);
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
                id: book_id,
                user_id : plomb_id
              }
            },
            dataType: 'js'
          });
      };

  const displayImage = () => {
    const hello = document.querySelectorAll(".fc-scroller");
    const gg = [].slice.call(hello)
    console.log(hello)
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

  $('#calendar').fullCalendar({
    schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',

    defaultView: 'timelineDay',


    header: false,


    events: '/api/v1/bookings',
    resources: '/api/v1/users',
    resourceAreaWidth: "20%" ,
    buttonText: false,
    nowIndicator: true,
    contentHeight: 'auto',
    slotDuration:'00:15:00',
    minTime: '09:00:00',
    maxTime: '19:00:00',
    resourceLabelText: 'Plumbers',
    eventColor: "#ff8b00",
    eventResize: function(calEvent, jsEvent, ui, view) {
      updateEvent(calEvent);
    },
    eventDrop: function(calEvent, jsEvent, ui, view) {
      updateEvent(calEvent);
    },
    // eventAfterAllRender: displayImage,
    viewRender: displayImage,
    refetchResourcesOnNavigate: true,
    // header: {
    // right: 'timelineDay,agendaFourDay' // buttons for switching between views
    // },
    editable: true,

    eventClick: function(calEvent, jsEvent, view) {
    const number = calEvent.travel_time / 60
    const trav = Math.round( number * 10 ) / 10;
      const book_id = calEvent.id
      console.log(calEvent)
      const message = ' Client: ' + calEvent.client.first_name + ' ' + calEvent.client.last_name  +
        '\n Category: ' + calEvent.intervention.category +
        '\n Price: ' + calEvent.intervention.price + ' €' +
        '\n Duration: ' + calEvent.intervention.duration + ' min' +
        '\n Address: ' + calEvent.client.address +
        '\n Travel time: ' + trav + 'min';

      const deleteBooking = calEvent.id;

      swal({
        title: "Booking Information?",
        text: message,
        buttons: {
          cancel: "OK",
          catch: {
            text: "Update",
            value: "catch",
          },
          delete: {
            text: "Delete",
            value: "delete",
            dangerMode: true,
            buttons: true,
          },
        },
      })
      .then((value) => {
        switch (value) {

          case "catch":
              console.log(book_id);
              window.location = `/bookings/${book_id}/edit`;
            break;

          case "delete":
            swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this booking file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                $.ajax({
                  headers: {
                  'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                  },
                  url: `/bookings/${deleteBooking}`,
                  method: 'DELETE',
                  dataType: 'html',
                }).done(function(){
                  window.location.href="/";
                  });
              } else {
                // swal("Your Intervention is safe!");
              }
            });
            break;

          default:
            // swal("Got away safely!");
        }
      });
    }
  })

}






