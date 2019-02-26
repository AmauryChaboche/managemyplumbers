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

intervention_1 = Intervention.create!(category: 'Water leak', duration: '30', price: '8000')
intervention_2 = Intervention.create!(category: 'Blocked toilets', duration: '30', price: '8000')
intervention_3 = Intervention.create!(category: 'Boiler breakdowns', duration: '45', price: '10000')
intervention_4 = Intervention.create!(category: 'Heating system problem', duration: '60', price: '12000')
intervention_5 = Intervention.create!(category: 'Gaz leak', duration: '90', price: '20000')


puts "create manager..."

manager = User.create!(first_name: 'Angus', last_name: 'Young', email: 'angus.young@myplumbers.com', password: '123456')


puts "create users..."

user_1 = User.create!(first_name: 'Bon', last_name: 'Scott', email: 'bon.scott@myplumbers.com', password: '123456', manager: manager)
user_2 = User.create!(first_name: 'Cliff', last_name: 'Williams', email: 'cliff.williams@myplumbers.com', password: '123456', manager: manager)
user_3 = User.create!(first_name: 'Malcolm', last_name: 'Young', email: 'malcolm.young@myplumbers.com', password: '123456', manager: manager)

puts "create client"

client_1 = Client.create!(first_name: 'Gerard', last_name: 'Dupond', address: '15 Rue De Rivoli, 75004 Paris, France', email: 'g.dupond@mail.com', phone_number: '0175404142')

puts "create booking"

booking_1 = Booking.create!(start_date: DateTime.new(2019,2,26,9,30), end_date: DateTime.new(2019,2,26,11), intervention: intervention_2, client: client_1, user: user_1)

