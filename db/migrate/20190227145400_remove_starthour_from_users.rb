class RemoveStarthourFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :start_hour
    remove_column :users, :end_hour
  end
end
