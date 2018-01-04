class City < ApplicationRecord
    has_many :measurements

    def low
        self.measurements.where(created_at: (Time.now - 24.hours)..Time.now)&.minimum(:temperature) 
    end

    def high
        self.measurements.where(created_at: (Time.now - 24.hours)..Time.now)&.maximum(:temperature) 
    end
end
