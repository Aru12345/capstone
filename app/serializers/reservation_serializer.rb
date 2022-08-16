class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :num, :contact, :occasion
  has_one :user
  has_one :restaurant
end
