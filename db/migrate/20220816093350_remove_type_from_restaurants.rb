class RemoveTypeFromRestaurants < ActiveRecord::Migration[6.1]
  def change
    remove_column :restaurants, :type, :string
  end
end
