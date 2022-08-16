Rails.application.routes.draw do
  
  resources :reservations,only: [:index,:create,:update,:destroy]
  resources :reviews,only: [:index,:create,:destroy]
  resources :restaurants,only: [:index]
  resources :users,only: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
