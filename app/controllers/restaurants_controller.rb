class RestaurantsController < ApplicationController
  
    def index
     resto=Restaurant.all
     render json: resto,status: :ok
    end
end
