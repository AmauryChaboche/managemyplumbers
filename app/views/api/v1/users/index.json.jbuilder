json.array! @users do |user|
  json.extract! user, :title, :id
end
