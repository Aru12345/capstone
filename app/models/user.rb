class User < ApplicationRecord
    has_secure_password
    has_many :reservations
    has_many :restaurants,through: :reservations
   has_many :reviews,through: :restaurants

   validates :name, presence: true
   validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
   validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "Sorry, that email isn't permitted.")
        end
    end 
end
