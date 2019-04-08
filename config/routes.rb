Rails.application.routes.draw do
  resources :robofriends, only: :index
end
