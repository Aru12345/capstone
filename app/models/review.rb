class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :r, length: { maximum: 1000,
  too_long: "%{1000} characters is the maximum allowed" }
end

#attributes :id, :img, :r