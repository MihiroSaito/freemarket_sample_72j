Rails.application.routes.draw do
  root 'top_page#index'
  resources :users, only: [:new]
  resources :items, only: [:create,:destroy]
  get 'exhibition/index'
  get "items/sample_show", to: "items#sample_show"
  get "items/sample_show2", to: "items#sample_show2"
end