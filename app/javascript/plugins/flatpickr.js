// import flatpickr from "flatpickr"
// import "flatpickr/dist/flatpickr.min.css" // Note this is important!

const calendrier = () => {
  const duration = Number.parseInt(document.getElementById("duration").dataset.duration);
  const start_date = Number.parseInt(document.getElementById("start_date").dataset.start);
  const end_date = start_date + duration;
  console.log(new Date(start_date));
  console.log(new Date(end_date));

  flatpickr(".datepicker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
  })
  const addDatePickr = () => {

    flatpickr(".datepicker", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    })
  }

  const calculateEndDate = () => {
    flatpickr(".datepicker", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    })
  }
}

export default calendrier;
