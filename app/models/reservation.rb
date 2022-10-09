class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :name,:date,:time,:num,:contact,presence: true
  validates :contact,length: {in: 4..15}
  validate :choosing_valid_date


end

# attributes :id, :name, :date, :time, :num, :contact, :occasion