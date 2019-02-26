class Api::V1::BookingsController < Api::V1::BaseController
  def index
    @bookings = Booking.all
  end
end
