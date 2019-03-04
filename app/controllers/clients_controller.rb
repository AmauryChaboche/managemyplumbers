class ClientsController < ApplicationController
  def new
    @client = Client.new
    @booking = Booking.new
  end

  def create
    client = Client.create(client_params)
    @booking = Booking.create(booking_params.merge(client_id: client.id))
    @booking2 = Booking.create(booking_params.merge(client_id: client.id))
    @booking3 = Booking.create(booking_params.merge(client_id: client.id))

    if params["match"].present?
      BookingSchedulerService.new(@booking).call
      BookingSchedulerService.new(@booking2).call2
      BookingSchedulerService.new(@booking3).call3
      @booking.save!
      @booking2.save!
      @booking3.save!
      redirect_to client_path(@booking.client_id)
    else
      redirect_to edit_booking_path(@booking)
    end
  end

  def edit
    @client = Client.find(params[:id])
  end

  def update
    @client = Client.find(params[:id])
    @garden.update(client_params)
  end

  def show
    @client = Client.find(params[:id])
    @bookings = Booking.where(client_id: @client.id)
  end

  private

  def client_params
    params.require(:new_client).permit(:first_name, :last_name, :address, :email, :phone_number)
  end

  def booking_params
    params.require(:booking).permit(:intervention_id, :urgency)
  end
end
