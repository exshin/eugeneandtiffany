Rails.application.routes.draw do
  # get 'pages/root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "pages#root"

  namespace :required_password do
    get :password
  end

  namespace :quiz do
    post :score
    get :high_scores
  end

  namespace :rsvp do
    get :find_groups_by_name
  end
end
