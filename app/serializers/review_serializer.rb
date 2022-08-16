class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :img, :r
  has_one :user
  has_one :restaurant
end
