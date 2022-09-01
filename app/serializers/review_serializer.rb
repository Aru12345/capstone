class ReviewSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :img, :r 
  has_one :user
  has_one :restaurant

end
