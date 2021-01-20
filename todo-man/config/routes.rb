Rails.application.routes.draw do
  resources :todos
  root 'home#index'
  get '*path', to: 'home#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
