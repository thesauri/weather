class CreateTemperatures < ActiveRecord::Migration[5.1]
  def change
    create_table :temperatures do |t|
      t.decimal :temperature, precision: 5, scale: 2
      t.references :city, foreign_key: true

      t.timestamps
    end
  end
end
