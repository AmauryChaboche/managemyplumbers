# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Client.destroy_all
Intervention.destroy_all
User.employees.destroy_all
User.managers.destroy_all

puts "create interventions..."

intervention_1 = Intervention.create!(
  category: 'Water leak',
  duration: '45',
  price: '80'
)

intervention_2 = Intervention.create!(
  category: 'Blocked toilets',
  duration: '45',
  price: '90'
)

intervention_3 = Intervention.create!(
  category: 'Boiler breakdowns',
  duration: '90',
  price: '100'
)
intervention_4 = Intervention.create!(
  category: 'Heating system problem',
  duration: '80',
  price: '120'
)

intervention_5 = Intervention.create!(
  category: 'Gaz leak',
  duration: '90',
  price: '200'
)

puts "create managers..."

manager = User.create!(
  email: 'amaury.chaboche@gmail.com',
  password: '123456',
  first_name: 'Amaury',
  last_name: 'Chab',
  avatar: 'https://avatars0.githubusercontent.com/u/19595651?s=400&amp;u=6d0b4d0e05bcc8da8580be89c53852dd8ffbdc10&amp;v=4'
)

puts "create users ..."

user_1 = User.create!(
  first_name: 'Mario',
  last_name: 'Bros',
  email: 'mario@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,19),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551863519/samples/people/Mario_avatar_sin_border.svg'
)

user_2 = User.create!(
  first_name: 'Luigi',
  last_name: 'Bros',
  email: 'luigi@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,16),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551863518/samples/people/Luigi_avatar_sin_border.svg'
)

user_3 = User.create!(
  first_name: 'Wario',
  last_name: 'Bros',
  email: 'wario@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551863516/samples/people/Wario_avatar_sin_border.svg'
)

user_4 = User.create!(
  first_name: 'Waluigi',
  last_name: 'Bros',
  email: 'warluigi@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,16),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551863518/samples/people/Warluigi_avatar_sin_border.svg'
)

user_5 = User.create!(
  first_name: 'Toad',
  last_name: 'Bros',
  email: 'toad@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551977061/samples/people/Toad_avatar.svg'
)

puts "create clients ..."

client_1 = Client.create!(
  first_name: 'Teddy',
  last_name: 'Riner',
  address: '15 Rue De Rivoli, 75004 Paris, France',
  email: 'teddy@riner.com',
  phone_number: '0175404142'
)

client_2 = Client.create!(
  first_name: 'Passe',
  last_name: 'Partout',
  address: '25 boulevard de magenta, Paris',
  email: 'passe.p@mail.com',
  phone_number: '0675404142'
)

client_3 = Client.create!(
  first_name: 'Pamela',
  last_name: 'Anderson',
  address: '52 Rue des Vignes, 75016 Paris',
  email: 'pamela.anderson@mail.com',
  phone_number: '0345534509'
)


client_4 = Client.create!(
  first_name: 'Adil',
  last_name: 'Rami',
  address: '10 rue de rome 75008 Paris',
  email: 'adil.rami@mail.com',
  phone_number: '0345534509'
)

client_5 = Client.create!(
  first_name: 'Sissi',
  last_name: 'Seulement',
  address: '10 boulevard voltaire 75011 Paris',
  email: 'princesse@sissi.com',
  phone_number: '0345534509'
)

client_6 = Client.create!(
  first_name: 'Big',
  last_name: 'Mac',
  address: '164 avenue de choisy 75013',
  email: 'big@mac.com',
  phone_number: '0246343409'
)


client_8 = Client.create!(
  first_name: 'Speedy',
  last_name: 'Gonzales',
  address: '10 avenue parmentier 75011 Paris',
  email: 'speedy@gonzales.com',
  phone_number: '0246343409'
)

client_9 = Client.create!(
  first_name: 'Ross',
  last_name: 'Geller',
  address: '286 Rue de Vaugirard, 75015 Paris',
  email: 'ross@geller.com',
  phone_number: '0246343409'
)

client_7 = Client.create!(
  first_name: 'Meunier',
  last_name: 'Tudor',
  address: '70 avenue trudaine 75009 Paris',
  email: 'meunier@tudor.com',
  phone_number: '0246343409'
)

puts "create bookings ..."

# Mario bookings


booking_10 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,30),
  intervention: intervention_3,
  client: client_6,
  user: user_1,
  planified: true,
  travel_time: 780,
  price: intervention_3.price.to_i
)
# Luigi bookings

booking_2 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
  intervention: intervention_2,
  client: client_2,
  user: user_2,
  planified: true,
  travel_time: 900,
  price: intervention_2.price.to_i
)

booking_9 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,10),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,20),
  intervention: intervention_5,
  client: client_7,
  user: user_2,
  planified: true,
  travel_time: 900,
  price: intervention_5.price.to_i
)

# Wario bookings

booking_3 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,45),
  intervention: intervention_1,
  client: client_3,
  user: user_3,
  planified: true,
  travel_time: 600,
  price: intervention_1.price.to_i
)

# Waluigi bookings

booking_6 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,15),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,12,15),
  intervention: intervention_5,
  client: client_8,
  planified: true,
  user: user_4,
  travel_time: 480,
  price: intervention_5.price.to_i
)

booking_1 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,12,00),
  intervention: intervention_1,
  client: client_1,
  user: user_3,
  planified: true,
  travel_time: 660,
  price: intervention_1.price.to_i
)
# Minion Minion bookings

booking_5 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,10),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,45),
  intervention: intervention_1,
  client: client_6,
  planified: true,
  user: user_5,
  travel_time: 1500,
  price: intervention_1.price.to_i
)

booking_4 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,00),
  intervention: intervention_4,
  client: client_5,
  user: user_5,
  planified: true,
  travel_time: 1200,
  price: intervention_4.price.to_i
)


