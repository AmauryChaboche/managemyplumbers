Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :bookings, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :clients, only: [:new, :create, :edit, :update]
  resources :interventions, only: [:index]
  resources :users, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
