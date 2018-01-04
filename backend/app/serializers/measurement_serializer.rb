class MeasurementSerializer < ActiveModel::Serializer
  attributes :id
  has_one :city
end
