class RenameTemperatureToMeasurement < ActiveRecord::Migration[5.1]
  def change
    rename_table :temperatures, :measurements 
  end
end
