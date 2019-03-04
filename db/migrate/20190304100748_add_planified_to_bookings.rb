class AddPlanifiedToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :planified, :boolean
  end
end
