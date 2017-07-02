Rails.application.routes.draw do
  resources :blogs
  root 'home#index'

  #get '/' => 'home#index'
  get '/about' => 'home#about'
  get '/contact' => 'home#contact'
  get '/blogs' => 'blogs#index'


  #post '/blog' => 'blogs#create'
  #patch '/blog' => 'blogs#update'

  #delete '/blog' => 'blogs#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
