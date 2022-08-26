class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant

  validates :name,:date,:time,:num,:contact,presence: true
  validates :contact,length: {in: 4..15}
  validate :choosing_valid_date

  def choosing_valid_date
    if date < Date.today
      errors.add(:date, "can't be in the past")
    end
  end

end

# attributes :id, :name, :date, :time, :num, :contact, :occasion