class ReviewSerializer < ActiveModel::Serializer
include Rails.application.routes.url_helpers
  attributes :id, :img, :r,:images
  has_one :user
  has_one :restaurant

  # def picture
  #   rails_blob_path(object.picture, only_path: true) if object.picture.attached?
  # end
 def images
  return unless object.images.attached?
  
    object.images.map do |image|
      image.blob.attributes
       .slice('id')
       .merge(url: image_url(image))
    end

 end

 def image_url(image)
  url_for(image)
 end
end
