# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

interventions = Intervention.create!([
{category: 'Water leak', duration: '30', price: '8000'},
{category: 'Blocked toilets', duration: '30', price: '8000'},
{category: 'Boiler breakdowns', duration: '45', price: '10000'},
{category: 'Heating system problem', duration: '60', price: '12000'},
{category: 'Gaz leak', duration: '90', price: '20000'}
])


manager = User.create!(
  email: 'amury.chaboche@gmail.com',
  password: '123456'
)

