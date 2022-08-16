class CreateRestaurants < ActiveRecord::Migration[6.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :cuisine
      t.string :cost
      t.string :address
      t.string :hours
      t.string :closed
      t.integer :phone
      t.string :must_try
      t.string :type
      t.string :website
      t.string :image

      t.timestamps
    end
  end
end
