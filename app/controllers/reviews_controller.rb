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
   
        review = @current_user.review.find(params[:id])
        if @current_user
        review.destroy
        else
            render json: {error: "Review of someone else."}, status: :not_found
        end
    end



    private
    
    def review_params
        params.permit(:img, :r,:user_id,:restaurant_id)

    end
   
end
