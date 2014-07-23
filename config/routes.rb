Rails.application.routes.draw do
  resources :users
  resources :sessions
  resources :pages
  root :to => 'pages#index'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
end
