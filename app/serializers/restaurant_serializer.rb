class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :cost, :address, :hours, :closed, :phone, :must_try, :category, :website, :image
end
