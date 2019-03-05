Rails.application.routes.draw do
  # get 'bookings/indexshow'
  # get 'bookings/new'
  # get 'bookings/create'
  # get 'bookings/edit'
  # get 'bookings/update'
  # get 'bookings/destroy'
  # get 'clients/new'
  # get 'clients/create'
  # get 'clients/edit'
  # get 'clients/update'
  devise_for :users

  root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :bookings, only: [ :index, :update ]
      resources :users, only: [ :index ]
      get '/users_hours', to: 'users#hours'
    end
  end
  get "bookings/dashboard", to: "bookings#dashboard"
  resources :bookings, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :clients, only: [:new, :create, :edit, :update, :show]
  resources :interventions, only: [:index]
  resources :users, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
