class Intervention < ApplicationRecord
  has_many :bookings, dependent: :destroy
end
