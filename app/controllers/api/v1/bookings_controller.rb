class Api::V1::BookingsController < Api::V1::BaseController
  def index
    @bookings = Booking.all
  end

  private

  def booking_params
    params.require(:booking).permit(:start_date, :end_hour)
  end

  def render_error
    render json: { errors: @booking.errors.full_messages },
      status: :unprocessable_entity
  end
end
