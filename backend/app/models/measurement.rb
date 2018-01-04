class Measurement < ApplicationRecord
  validates :temperature, numericality: { greater_than: -100, less_than: 100 } # Prepare for climate change
  belongs_to :city
end
