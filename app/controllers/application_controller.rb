class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  rescue_from StandardError, with: :redirect

  def redirect
    redirect_to bookings_path unless Rails.env.development?
  end
end
