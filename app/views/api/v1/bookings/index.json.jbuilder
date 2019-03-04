@bookings = @bookings.select { |booking| !booking.start_date.nil? && booking.planified }
json.array! @bookings do |booking|
  json.extract! booking, :title, :start, :end, :resourceId, :user, :intervention, :client, :id, :travel_time
end
