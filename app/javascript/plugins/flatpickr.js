import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"


const calendrier = () => {
  let duration;
  let start_date;
  const durationFromRuby = document.getElementById("duration");
  if (durationFromRuby) {
    duration = Number.parseInt(durationFromRuby.dataset.duration);
  }
  const startDateFromRuby = document.getElementById("start_date");
  if (startDateFromRuby) {
    start_date = Number.parseInt(startDateFromRuby.dataset.start);
  }

  const end_date = start_date + duration;
  console.log(duration);
  console.log(new Date(start_date));
  console.log(new Date(end_date));


flatpickr(".datepicker", {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
})
