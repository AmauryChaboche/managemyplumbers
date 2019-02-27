class AddStartingToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :starting_hour, :datetime
    add_column :users, :ending_hour, :datetime
  end
end
