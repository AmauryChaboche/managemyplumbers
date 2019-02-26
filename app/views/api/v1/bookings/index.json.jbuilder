json.array! @bookings do |booking|
  json.extract! booking, :title, :start, :end, :resourceId
end


