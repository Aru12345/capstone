class SessionsController < ApplicationController
 skip_before_action :authorized


   def get_currentuser
    #retrive a token and decode the token to get the current user
    render json: current_user

   end
    
   def login
    @user=User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
        @token = encode_token({user_id: @user.id})
        render json:{user:  @user,token: @token},status: :ok
      else
        render json: {errors: ["Username and Password must match"]},status: :unprocessable_entity
      end


   end
end
