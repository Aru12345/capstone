class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant
end

# attributes :id, :name, :date, :time, :num, :contact, :occasion