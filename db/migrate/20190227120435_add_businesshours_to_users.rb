class AddBusinesshoursToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :start_hour, :string
    add_column :users, :end_hour, :string
  end
end
