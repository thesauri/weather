# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.create([
    { name: 'Helsinki', latitude: 60.1697530, longitude: 24.9490830 },
    { name: 'Tokyo', latitude: 35.6584421, longitude: 139.7328635 },
    { name: 'New York', latitude: 40.7406905, longitude: -73.9938438 },
    { name: 'Amsterdam', latitude: 52.3650691, longitude: 4.9040238 },
    { name: 'Dubai', latitude: 25.092535, longitude: 55.1562243 }
])