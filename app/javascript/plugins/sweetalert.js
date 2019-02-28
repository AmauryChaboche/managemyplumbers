import swal from 'sweetalert';

const sweetalert_simple_validation = () => {
    console.log('hello from sweet alert');
    const swalButton = document.querySelector("#sweet-alert-simple_validation");
// protect other pages
      swalButton.addEventListener('click', () => {
         swal({
          position: 'center',
          type: 'success',
          title: 'Your intervention has been booked',
          showConfirmButton: false,
          timer: 1500
        });
      });

  };

  const sweetalert_double_validation = () => {
    console.log('hello from sweet alert');
    const swalButton = document.querySelector("#sweet-alert-double_validation");
// protect other pages
      swalButton.addEventListener('click', () => {
         swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      });

  };

  const sweetalert_triple_validation = () => {
    console.log('hello from sweet alert');
    const swalButton = document.querySelector("#sweet-alert-triple_validation");
// protect other pages
      swalButton.addEventListener('click', () => {
         swal("A wild Pikachu appeared! What do you want to do?", {
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
                swal("Pikachu fainted! You gained 500 XP!");
                break;

              case "catch":
                swal("Gotcha!", "Pikachu was caught!", "success");
                break;

              default:
                swal("Got away safely!");
            }
          });
      });

  };

//   initSweetalert('#sweet-alert-demo', {
//     title: "Are you sure?",
//     text: "Once deleted, you will not be able to recover this imaginary file!",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       text: "Poof! Your imaginary file has been deleted!";
//     } else {
//       text: "Your imaginary file is safe!";
//     }
// })


// //   initSweetalert('#sweet-alert-demo', {
// //   title: "A nice alert",
// //   text: "This is a great alert, isn't it?",
// //   icon: "success"
// // });

// }


export { sweetalert_simple_validation };
export { sweetalert_double_validation };
export { sweetalert_triple_validation };
