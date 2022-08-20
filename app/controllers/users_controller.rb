class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    wrap_parameters false
    skip_before_action :authorized,only: [:create]
    before_action :set_user,only: [:show,:update,:destroy]
     def create
      @user=User.new(user_params)

      if @user.save
        @token = encode_token({user_id: @user.id})
        render json:{user: @user,token: @token},status: :created
      else
        render json: @user.errors,status: :unprocessable_entity
      end
    end
  

      def index
        user=User.all 
        render json: user
      end

    

    private     
    def user_params
      params.require(:user).permit(:name,:email,:password,:user)

    end
    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
