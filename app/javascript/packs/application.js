import "bootstrap";
import { initMapbox } from "../plugins/init_mapbox";

import 'select2/dist/css/select2.css';

import "../plugins/flatpickr";
import { display_calendar } from "../plugins/init_fullcalendar";
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import { initSelect2 } from '../plugins/init_select2';
import { initAutocomplete } from '../plugins/init_autocomplete';

import bookingDuration from '../plugins/booking_duration';
import { chooseAddress } from "../plugins/init_mapbox";

import { myChart } from '../plugins/init_chart';

import { plumbersChoice } from '../plugins/plumber_choice';

initMapbox();
initSelect2();
initAutocomplete();

import { sweetalert_simple_validation } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-simple_validation")){
  sweetalert_simple_validation();
}

import { sweetalert_double_validation } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-double_validation")){
  sweetalert_double_validation();
}

import { sweetalert_triple_validation } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-triple_validation")){
  sweetalert_triple_validation();
}

import { sweetalert_triple_validation_full_callendar } from '../plugins/sweetalert';
if (document.getElementById("sweet-alert-triple_validation_full_callendar")){
  sweetalert_triple_validation_full_callendar();
}

if (document.getElementById("booking_start_date")) {
  bookingDuration();
}

import { findAMatch } from '../plugins/find_a_match';
if (document.getElementById("new_client_email")) {
  findAMatch();
}


plumbersChoice();







