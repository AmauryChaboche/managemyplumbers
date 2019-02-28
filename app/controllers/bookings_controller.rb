require 'json'
require 'open-uri'

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
    @duration = @booking.intervention.duration
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
    # On regarde si tout le monde a une intervention VALIDEE
    # On récupère la dernière intervention VALIDEE de la journée pour chaque USER
    # On calcule le temps pour aller du point I au point souhaite pour CHAQUE LAST INTERVENTION
    # On les classe par temps minimal pour y aller
    # On vérfie qu'il ne finit pas après 18H #
    # On renvoie les 2 premiers avec un score entre les 2
    # Lorsqu'il choisit une des deux c'est OK -> elle a le statut VALIDEE
  end

  def calculation(booking1, booking2)
    longitude1 = booking1.client.longitude.to_f
    latitude1 = booking1.client.latitude.to_f
    longitude2 = booking2.client.longitude.to_f
    latitude2 = booking2.client.latitude.to_f
    url = "https://api.mapbox.com/directions/v5/mapbox/driving-traffic/#{longitude1}%2C#{latitude1}%3B#{longitude2}%2C#{latitude2}.json?access_token=pk.eyJ1IjoiaGVsbG9qZWFubmUiLCJhIjoiY2pydWdjaW1qMDdpbzQzdHN0d3RmZ3NmbCJ9.WDQ36rRUNAn-4WviS51TYQ"
    direction_serialized = open(url).read
    direction = JSON.parse(direction_serialized)
    return direction["routes"][0]["legs"][0]["duration"]
  end

  def find_durations(new_booking)
    last_bookings = []
    User.employees.all.each do |user|
      last_bookings << user.bookings.order(:end_date).last
    end
    durations = []
    last_bookings.each do |booking|
      durations << calculation(booking, new_booking)
    end
    p durations
  end
end
