const booking_duration = () => {
  const startsAt = document.getElementById('booking_start_date')
  startsAt.addEventListener("change", (event) => {
    const duration = Number.parseInt(document.getElementById("duration").dataset.duration);
    const startDate = Date.parse(startsAt.value);
    const result = startDate + duration
    const endDate = (new Date(result));
    const year = endDate.getFullYear();
    const month = endDate.getMonth() + 1;
    const day = endDate.getDate();
    const hours = endDate.getHours();
    const minutes = endDate.getMinutes();
    const recomposed = `${year}-${month}-${day} ${hours}:${minutes}`;
    const endAt = document.getElementById('booking_end_date');
    endAt.value = recomposed;
  })
}

export default booking_duration;
