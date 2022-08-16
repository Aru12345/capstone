class AddCategoryToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :category, :string
  end
end
