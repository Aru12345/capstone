Rails.application.routes.draw do
  
  resources :reservations,only: [:index,:create,:update,:destroy]
  resources :reviews,only: [:index,:create,:destroy]
  resources :restaurants,only: [:index]
  resources :users, only: [:index,:show, :index]

  get '/authorized_user', to: 'users#show'

post 'login',to: "sessions#login"
  post "/signup", to: "users#create"
  get "/getcurrentuser",to: "sessions#get_currentuser"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
