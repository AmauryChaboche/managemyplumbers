class CreateInterventions < ActiveRecord::Migration[5.2]
  def change
    create_table :interventions do |t|
      t.string :category
      t.integer :duration
      t.integer :price

      t.timestamps
    end
  end
end
