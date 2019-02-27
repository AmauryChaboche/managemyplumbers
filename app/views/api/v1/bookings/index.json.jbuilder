json.array! @bookings do |booking|
  json.extract! booking, :title, :start, :end, :resourceId, :user, :intervention, :client
end

