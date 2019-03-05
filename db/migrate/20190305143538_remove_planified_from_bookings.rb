class RemovePlanifiedFromBookings < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :planified
  end
end
