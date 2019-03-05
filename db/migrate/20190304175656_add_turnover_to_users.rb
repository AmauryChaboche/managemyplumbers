class AddTurnoverToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :turnover, :integer
  end
end
