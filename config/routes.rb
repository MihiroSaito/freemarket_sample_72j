Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }
  devise_scope :user do
    get 'users/home', to:'devise/registrations#index'
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
  end
  root 'top_page#index'
  
  resources :users, only: [:show]
  resources :items, only: [:new, :create, :destroy, :edit, :show]
    resources :items do    
      get :purchase, on: :member  
      #Ajaxで動くアクションのルートを作成
      collection do
        get 'get_category_children', defaults: { format: 'json' }
        get 'get_category_grandchildren', defaults: { format: 'json' }
      end
    end
  resources :exhibition, only: [:index]
  get 'exhibition/index'

end

