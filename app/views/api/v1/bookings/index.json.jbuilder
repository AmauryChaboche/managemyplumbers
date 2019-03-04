@bookings = @bookings.select { |booking| booking.start_date != nil }
json.array! @bookings do |booking|
  json.extract! booking, :title, :start, :end, :resourceId, :user, :intervention, :client, :id, :travel_time, :created_at, :updated_at
  json.color "blue" if @bookings.last == booking
end
