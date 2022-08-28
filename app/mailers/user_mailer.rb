class UserMailer < ApplicationMailer
    default from: 'welcome@bigapple.com'

    def welcome_email
        @user = params[:user]
      @url  = 'http://example.com/login'
      mail(to: @user.email, subject: 'Welcome to Big Apple Explorer')
    end
end
