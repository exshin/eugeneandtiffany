Rails.application.routes.draw do
  # get 'pages/root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "pages#root"

  namespace :required_password do
    get :password
    get :santa_password
  end

  namespace :quiz do
    post :score
    get :high_scores
    get :all_scores
  end

  namespace :rsvp do
    get :index
    get :find_groups_by_name
    post :submit_rsvps
  end

  namespace :tokens do
    get :find_token
  end

  namespace :toby_game do
    post :score
    get :high_scores
  end

  namespace :hunts do
    get :index
    get :fetch_name
    post :progress
  end

  namespace :blocks do
    post :score
    get :high_scores
  end

  namespace :santa do
    post :submit
  end

  resources :santa do
    root to: "santa#root"
  end

  #match '*path', to: 'pages#index', via: :all
end
