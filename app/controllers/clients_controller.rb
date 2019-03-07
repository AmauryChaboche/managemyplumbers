class ClientsController < ApplicationController
  def new
    @client = Client.new
    @booking = Booking.new
  end

  def create
    client = Client.find_by(email: client_params[:email]) || Client.new
    client.assign_attributes(client_params)
    client.save

    if params["match"].present?
      if booking_params[:urgency]
        @booking3 = Booking.create(booking_params.merge(client_id: client.id))
        if @booking3.save
          BookingSchedulerService.new(@booking3).call3
          @booking3.price = @booking3.intervention.price + 50
          @booking3.save!
          redirect_to client_path(@booking3.client_id)
        else
          render :new
        end
      else
        @booking = Booking.create(booking_params.merge(client_id: client.id))
        @booking2 = Booking.create(booking_params.merge(client_id: client.id))
        if @booking.save
          BookingSchedulerService.new(@booking).call
          BookingSchedulerService.new(@booking2).call2
          @booking.price = @booking.intervention.price
          @booking2.price = @booking2.intervention.price
          @booking.save!
          @booking2.save!
          redirect_to client_path(@booking.client_id)
        else
          render :new
        end
      end
    else
      @booking = Booking.create(booking_params.merge(client_id: client.id))
      @booking.price = @booking.intervention.price
      if @booking.save
        redirect_to edit_booking_path(@booking)
      else
        render :new
      end
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
    @bookings = Booking.where(client_id: @client.id, planified: false)
  end

  private

  def client_params
    params.require(:new_client).permit(:first_name, :last_name, :address, :email, :phone_number)
  end

  def booking_params
    params.require(:booking).permit(:intervention_id, :urgency)
  end
end
