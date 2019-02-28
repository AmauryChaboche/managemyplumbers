import swal from 'sweetalert';

const sweetalert = () => {
  const initSweetalert = (selector, options = {}) => {
    console.log('hello from sweet alert');
    const swalButton = document.querySelector(selector);
    if (swalButton) { // protect other pages
      swalButton.addEventListener('click', () => {
        swal(options);
      });
    }
  };

  initSweetalert('#sweet-alert-demo', {
  title: "A nice alert",
  text: "This is a great alert, isn't it?",
  icon: "success"
});


  initSweetalert('#sweet-alert-demo', {
  title: "A nice alert",
  text: "This is a great alert, isn't it?",
  icon: "success"
});

}

export { sweetalert };
