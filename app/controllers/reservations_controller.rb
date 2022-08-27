class ReservationsController < ApplicationController
    def index
        reservations = @current_user.reservations
         render json: reservations
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
   
        reservation = Reservation.find_by(id:params[:id])
        if reservation
          reservation.destroy
          head :no_content

        else
            render json: {error: "Reservation Not Found ."}, status: :not_found
        end
    end



    private
    
    def reservation_params
        params.permit(:name, :date, :time, :num, :contact, :occasion,:user_id,:restaurant_id)

    end
   
end
