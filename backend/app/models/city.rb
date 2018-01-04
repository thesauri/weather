class City < ApplicationRecord
    has_many :measurements

    def temperature
        self.measurements.last
    end

    def low
        self.measurements.where(created_at: (Time.now - 24.hours)..Time.now)&.order(:temperature).first 
    end

    def high
        self.measurements.where(created_at: (Time.now - 24.hours)..Time.now)&.order(:temperature).last
    end
end
