class Client < ApplicationRecord
  has_many :bookings, dependent: :destroy
  # please don't comment these lines
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end
