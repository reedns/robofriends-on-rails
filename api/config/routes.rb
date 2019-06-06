Rails.application.routes.draw do
  scope '/api' do
    resources :robofriends, only: :index do
      resources :speech, only: :index
    end
  end
end
