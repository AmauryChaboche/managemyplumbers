json.array! @users do |user|
  json.extract! user, :dow, :start, :end
end
