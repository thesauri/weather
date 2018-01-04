Rails.application.routes.draw do
  resources :cities, only: [:index]
  resources :measurements, only: [:create]
  match 'measurements/reset', to: 'measurements#reset', via: [:delete]
end
