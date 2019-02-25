class ClientsController < ApplicationController
  def new
    @client = Client.new
  end

  def create
    @client = Client.new(client_params)
    @client.save
  end

  def edit
    @client = Client.find(params[:id])
  end

  def update
    @client = Client.find(params[:id])
    @garden.update(client_params)
  end

  private

  def client_params
    params.require(:client).permit(:first_name, :last_name, :address, :email, :phone_number)
  end
end
