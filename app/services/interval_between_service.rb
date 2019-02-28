require 'json'
require 'open-uri'

class IntervalBetweenService
  # def self.call(booking1, booking2)
  #   self.new()
  # end
  def initialize(booking1, booking2)
    @booking1 = booking1
    @booking2 = booking2
  end

  def call
    longitude1 = @booking1.client.longitude.to_f
    latitude1 = @booking1.client.latitude.to_f
    longitude2 = @booking2.client.longitude.to_f
    latitude2 = @booking2.client.latitude.to_f
    url = "https://api.mapbox.com/directions/v5/mapbox/driving-traffic/#{longitude1}%2C#{latitude1}%3B#{longitude2}%2C#{latitude2}.json?access_token=pk.eyJ1IjoiaGVsbG9qZWFubmUiLCJhIjoiY2pydWdjaW1qMDdpbzQzdHN0d3RmZ3NmbCJ9.WDQ36rRUNAn-4WviS51TYQ"
    direction_serialized = open(url).read
    direction = JSON.parse(direction_serialized)
    direction["routes"][0]["legs"][0]["duration"]
  end
end

# p IntervalBetweenService.new(Booking.first, Booking.last).call
