class ChangePhoneInRestaurants < ActiveRecord::Migration[6.1]
  def change
    change_column :restaurants, :phone , :string
  end
end
