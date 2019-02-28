import "bootstrap";
import { initMapbox } from "../plugins/init_mapbox";

// import "../plugins/flatpickr";
import { display_calendar } from "../plugins/init_fullcalendar";
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar-scheduler/dist/scheduler.css';
import { initSelect2 } from '../plugins/init_select2';
import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
import calendrier from '../plugins/flatpickr';
import { chooseAddress } from "../plugins/init_mapbox";
import "../plugins/flatpickr";

initMapbox();
calendrier();
initSelect2();

