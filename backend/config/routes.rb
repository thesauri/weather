Rails.application.routes.draw do
  resources :cities, only: [:index]
  resources :measurements, only: [:create]
end
