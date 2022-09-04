class ReviewSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :img, :r,:picture
  has_one :user
  has_one :restaurant

  def picture
    rails_blob_path(object.picture, only_path: true) if object.picture.attached?
  end
end
