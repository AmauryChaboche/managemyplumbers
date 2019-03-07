@bookings = @bookings.select { |booking| !booking.start_date.nil? && booking.planified }
json.array! @bookings do |booking|
  json.extract! booking, :title, :start, :end, :resourceId, :user, :intervention, :client, :id, :travel_time, :created_at, :updated_at
  json.color "#1B998B"
  json.color "#0FFF95" if @bookings.last == booking
  json.textColor "#1B998B" if @bookings.last == booking
end

