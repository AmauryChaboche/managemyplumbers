class AddPriceToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :price, :integer
  end
end
