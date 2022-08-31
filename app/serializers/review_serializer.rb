class ReviewSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :img, :r ,:main_image
  has_one :user
  has_one :restaurant

  def pic_url
    rails_blob_path(object.main_image,only_path: true) if object.main_image.attached?

  end
end
