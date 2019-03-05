import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  $('.select2').select2(); // (~ document.querySelectorAll)
};

$(document).ready(function() {
    $('.address').select2();
});

export { initSelect2 };
