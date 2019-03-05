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
  duration: '30',
  price: '80'
)

intervention_2 = Intervention.create!(
  category: 'Blocked toilets',
  duration: '30',
  price: '90'
)

intervention_3 = Intervention.create!(
  category: 'Boiler breakdowns',
  duration: '45',
  price: '100'
)
intervention_4 = Intervention.create!(
  category: 'Heating system problem',
  duration: '60',
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
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551787201/samples/people/Mario_avatar.svg'
)

user_2 = User.create!(
  first_name: 'Luigi',
  last_name: 'Bros',
  email: 'luigi@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,16),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551787201/samples/people/Luigi_avatar.svg'
)

user_3 = User.create!(
  first_name: 'Wario',
  last_name: 'Bros',
  email: 'wario@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551787201/samples/people/Wario_avatar.svg'
)

user_4 = User.create!(
  first_name: 'Warluigi',
  last_name: 'Bros',
  email: 'warluigi@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,20),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551787201/samples/people/Warluigi_avatar.svg'
)

user_5 = User.create!(
  first_name: 'Minion',
  last_name: 'Minion',
  email: 'minion@myplumbers.com',
  password: '123456',
  manager: manager,
  starting_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9),
  ending_hour: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14),
  avatar: 'https://res.cloudinary.com/dvsxgvwog/image/upload/v1551787201/samples/people/Minion_avatar.svg'
)

puts "create clients ..."

client_1 = Client.create!(
  first_name: 'Gerard',
  last_name: 'Dupond',
  address: '15 Rue De Rivoli, 75004 Paris, France',
  email: 'g.dupond@mail.com',
  phone_number: '0175404142')

client_2 = Client.create!(
  first_name: 'Astrid Delcros',
  last_name: 'Dupond',
  address: '25 boulevard de magenta, Paris',
  email: 'astro@mail.com',
  phone_number: '0675404142')

client_3 = Client.create!(
  first_name: 'Bernard',
  last_name: 'Lama',
  address: 'parc des princes paris',
  email: 'lama@mail.com',
  phone_number: '0345534509')


client_4 = Client.create!(
  first_name: 'Aimé',
  last_name: 'Jacquet',
  address: '10 rue de rome 75008 Paris',
  email: 'aime@mail.com',
  phone_number: '0345534509')

client_5 = Client.create!(
  first_name: 'Choupo',
  last_name: 'Moting',
  address: '10 boulevard voltaire 75011 Paris',
  email: 'lama@mail.com',
  phone_number: '0345534509')

puts "create bookings ..."

booking_1 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,00),
  intervention: intervention_1,
  client: client_1,
  user: user_1,
  planified: true,
)

booking_2 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
  intervention: intervention_2,
  client: client_2,
  user: user_2,
  planified: true,
)

booking_3 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,00),
  intervention: intervention_3,
  client: client_3,
  user: user_3,
  planified: true,
)

booking_4 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14,30),
  intervention: intervention_4,
  client: client_4,
  user: user_4,
  planified: true,
)


booking_5 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,45),
  intervention: intervention_1,
  client: client_5,
  planified: true,
  user: user_5
)

booking_6 = Booking.create!(
  start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day + 1,9,00),
  end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,30),
  intervention: intervention_5,
  client: client_1,
  planified: true,
  user: user_5
)

# booking_7 = Booking.create!(
#   start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,13,00),
#   end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14,00),
#   intervention: intervention_1,
#   client: client_1,
#   user: user_1
# )

# booking_8 = Booking.create!(
#   start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,00),
#   end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,00),
#   intervention: intervention_2,
#   client: client_2,
#   user: user_2
# )

# booking_9 = Booking.create!(
#   start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,30),
#   end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,11,30),
#   intervention: intervention_3,
#   client: client_3,
#   user: user_3
# )

# booking_10 = Booking.create!(
#   start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,14,00),
#   end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,15,00),
#   intervention: intervention_4,
#   client: client_2,
#   user: user_3
# )


# booking_11 = Booking.create!(
#   start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,9,00),
#   end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,10,30),
#   intervention: intervention_1,
#   client: client_3,
#   user: user_4
# )

# booking_12 = Booking.create!(
#   start_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,17,00),
#   end_date: DateTime.new(2019, DateTime.now.month, DateTime.now.day,18,30),
#   intervention: intervention_5,
#   client: client_1,
#   user: user_5
# )
