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
    start_date = params[:start_date]
    booking_params[:start_date]
    @booking.update(booking_params)
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.delete
  end

  private

  def booking_params
    params.require(:booking).permit(
      :intervention_id, :client_id, :user_id, :start_date, :end_date, :urgency, :travel_time, :id
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

    def calculation(timing, otherzone)
    end
  end
end
