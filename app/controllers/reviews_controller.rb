class ReviewsController < ApplicationController
    def index
        review =Review.all
        render json: review
     end

    def create
        review=Review.create!(review_params)
        render json: review,status: :created
    end

    def destroy
      review = Review.find_by(id:params[:id])
        if review
          review.destroy
          head :no_content
        else
          render json: {error: "Review Not Found ."}, status: :not_found
        end
    end

    private
    
    def review_params
        params.permit(:img, :r,:user_id,:restaurant_id,images:[])
    end
   
end
