class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  skip_before_action :authorize, only: [:create]
   def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    
      
    end
    
    def show
      render json: @current_user
    end

    def index
      user=User.all 
      render json: user
    end


  private     
  def user_params  
     params.permit(:name,:email,:password)

  end
  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
