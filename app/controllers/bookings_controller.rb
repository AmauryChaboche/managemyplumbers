class BookingsController < ApplicationController
  def index
    @bookings = Booking.all

    scoring
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def new
    @booking = Booking.new
  end

  def create
    @booking = Booking.new(booking_params)
    @booking.save
  end

  def edit
    @booking = Booking.find(params[:id])
  end

  def update
    @booking = Booking.find(params[:id])
    @booking.update(booking_params)
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.delete
  end

  private

  def booking_params
    params.require(:booking).permit(
      :intervention_id, :client_id, :user_id, :start_date, :end_date, :urgency, :travel_time
    )
  end

  def scoring
    def calculation(pointa, pointb)
    end
  end
end
