class MeasurementsController < ApplicationController
    def create
        measurement = Measurement.create(city_id: params[:city_id], temperature: params[:temperature])
        if measurement.save
            render json: measurement
        else
            render json: measurement, status: 400, serializer: ActiveModel::Serializer::ErrorSerializer
        end
    end
end
