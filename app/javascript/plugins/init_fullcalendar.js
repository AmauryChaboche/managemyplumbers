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

//   document.addEventListener('DOMContentLoaded', function(){
//   // $(function () {


//     const updateEvent = (event) => {
//       // console.log(event);
//     }

//     const usersHours = JSON.parse(calendar.dataset.hours);
//     $('#calendar').fullCalendar({
//       schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
//       defaultView: 'timelineDay',
//       events: '/api/v1/bookings',
//       resources: '/api/v1/users',
//       nowIndicator: true,
//       contentHeight: 'auto',
//       slotDuration:'00:15:00',
//       minTime: '09:00:00',
//       maxTime: '19:00:00',
//       resourceLabelText: 'Plumbers',
//       eventDragStop: updateEvent ,

//       header: {
//       right: 'timelineDay,agendaFourDay' // buttons for switching between views
//       },
//       editable: true,
//       views: {
//       agendaFourDay: {
//         type: 'timelineDay',
//         duration: { hours: 12 },
//         buttonText: 'full day'
//       }
//     },

//       eventClick: function(calEvent, jsEvent, view) {
//         console.log(calEvent);
//         // console.log(jsEvent);
//         // console.log(view);
//         const message = ' Client: ' + calEvent.client.first_name + ' ' + calEvent.client.last_name  +
//           '\n Category: ' + calEvent.intervention.category +
//           '\n Price: ' + calEvent.intervention.price +
//           '\n Duration: ' + calEvent.intervention.duration +
//           '\n Address: ' + calEvent.client.address ;

//         swal({
//           title: "Intervention modification?",
//           text: message,
//           buttons: {
//             cancel: "Run away!",
//             catch: {
//               text: "Throw Pokéball!",
//               value: "catch",
//             },
//             defeat: true,
//           },
//         })
//         .then((value) => {
//           switch (value) {

//             case "defeat":
//               window.location = "/clients/new";
//               break;

//             case "catch":
//               swal("Gotcha!", "Pikachu was caught!", "success");
//               break;

//             default:
//               swal("Got away safely!");
//           }
//         });
//       // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
//       // alert('View: ' + view.name);
//       // // change the border color just for fun
//       // $(this).css('border-color', 'red');

//     }
//     })

//     // const hello = document.querySelectorAll(".fc-scroller")
//     // const gg = hello[2]
//     // console.log(hello);
//     // console.log(gg);

//     // [...temp1.querySelectorAll('tr')].map(line => line.innerText.split(': '));
//   })
// }

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
    defaultView: 'timelineDay',
    header: {
      right: 'today prev,next',
      center: 'title',
      left: 'timelineDay'
    },

    events: '/api/v1/bookings',
    resources: '/api/v1/users',
    resourceAreaWidth: "20%" ,
    buttonText: {
      prev: '<',
      next: '>'
    },


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

    // header: {
    // right: 'timelineDay,agendaFourDay' // buttons for switching between views
    // },
    editable: true,
    eventClick: function(calEvent, jsEvent, view) {
      // console.log(calEvent);
      console.log(calEvent);
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

  }


})
}






