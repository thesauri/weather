class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude, :low, :high
end
