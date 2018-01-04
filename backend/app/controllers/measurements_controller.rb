class MeasurementsController < ApplicationController
    def create
        measurement = Measurement.create(city_id: params[:city_id], temperature: params[:temperature])
        if measurement.save
            render json: measurement, include: 'city'
        else
            render json: measurement, status: 400, serializer: ActiveModel::Serializer::ErrorSerializer
        end
    end

    def reset
        Measurement.delete_all
        City.delete_all # !!
        Rails.application.load_seed
        render json: Measurement.all
    end
end
