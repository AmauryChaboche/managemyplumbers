import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  $('.select2').select2(); // (~ document.querySelectorAll)
};

export { initSelect2 };

$(document).ready(function() {
    $('.address').select2();
});

$( document ).ready(function() {
    console.log( "ready!" );
});
