class User < ApplicationRecord
    has_secure_password
    has_many :reservations
    has_many :restaurants,through: :reservations
   has_many :reviews,through: :restaurants
end
