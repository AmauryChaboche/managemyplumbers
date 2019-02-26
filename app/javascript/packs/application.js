import "bootstrap";
import { display_calendar } from "../plugins/init_fullcalendar";
import 'fullcalendar/dist/fullcalendar.css';

if (document.getElementById('calendar') ){
  display_calendar();
}
