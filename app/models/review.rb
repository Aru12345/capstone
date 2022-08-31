class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  has_one_attached :main_image

  validates :r, length: { maximum: 1000,
  too_long: "%{1000} characters is the maximum allowed" }

  def pic_url

  end
end

#attributes :id, :img, :r