class ReservationsController < ApplicationController
    def index
        reservation =Reservation.all
        render json: reservation

    end

    def create
        reservation=Reservation.create!(reservation_params)
        render json: reservation,status: :created


    end

    def update
        reservation = Reservation.find_by(id: params[:id])
        review.update!(reservation_params)
        render json: reservation,status: :ok

    end
  

    def destroy
   
        reservation = @current_user.reservation.find(params[:id])
        if @current_user
        reservation.destroy
        else
            render json: {error: "Reservation of someone else."}, status: :not_found
        end
    end



    private
    
    def review_params
        params.permit(:name, :date, :time, :num, :contact, :occasion,:user_id,:restaurant_id)

    end
   
end
