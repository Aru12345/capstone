class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
  # has_one_attached :picture
  has_many_attached :images do |attachable|
    attachable.variant :thumb,reseize_to_limit: [100,200]
  end


  validates :r, length: { maximum: 1000,
  too_long: "%{1000} characters is the maximum allowed" }

  
end

#attributes :id, :img, :r