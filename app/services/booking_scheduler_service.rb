class BookingSchedulerService
  def initialize(new_booking)
    @new_booking = new_booking
  end

  def call
    api_call = smallest_travel_time
    last_booking = api_call[:last_booking]
    travel_time = api_call[:duration]
    user = last_booking.user
    start_date = last_booking.end_date + duration
    end_date = start_date + @new_booking.intervention.duration
    @new_booking.update(travel_time: travel_time, user_id: user.id, start_date: start_date, end_date: end_date)
  end

  private

  def smallest_travel_time
    last_bookings = User.employees.map do |user|
      user.bookings.order(:end_date).last
    end
    user_durations = last_bookings.map do |last_booking|
      {
        last_booking: last_booking,
        duration: IntervalBetweenService.new(last_booking, @new_booking).call
      }
    end
    user_durations.sort_by { |ud| ud[:duration] }.first
  end
end
# p BookingSchedulerService.new(Booking.last).call
