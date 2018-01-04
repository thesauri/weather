Rails.application.routes.draw do
  resources :cities, only: [:index]
end
