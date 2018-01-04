class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :latitude, :longitude
end
