require 'json'
require 'open-uri'

class BookingsController < ApplicationController
  def index
    Booking.where(planified: false).destroy_all
    @bookings = Booking.all
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
    @intervention = @booking.intervention
    @duration = @booking.intervention.duration
    @booking.planified = true
    @booking.save
  end

  def update
    @booking = Booking.find(params[:id])
    # start_date = params[:start_date]
    # user_id = params[:user_id]
    # booking_params[:start_date]
    if @booking.planified
      @booking.update(booking_params)
    else
      @booking.planified = true
      @booking.save!
      current_user.bookings.where(planified: false).destroy_all
    end
    redirect_to bookings_path
  end

  def dashboard
    @bookings = Booking.where(planified: true)
    @employees = current_user.employees
    @employees.each do |employee|
      turnover = 0
      employee.first_name
      employee.last_name
      employee.bookings.each do |book|
        turnover += book.intervention.price
      end
      employee[:turnover] = turnover
    end
    @name_data = []
    @turnover_data = []
    @employees.each do |l|
      @name_data << l.first_name
      @turnover_data << l.turnover
    end
    @names = @name_data.join('-')
    @turnover = @turnover_data.join('-')
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.delete
    redirect_to action: :index, status: 303
  end

  private

  def booking_params
    params.require(:booking).permit(:intervention_id, :client_id, :user_id, :start_date, :end_date, :urgency, :travel_time, :id, :planified)
  end
end
