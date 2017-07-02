class BlogsController < ApplicationController
	def index
		@blog = Blog.order(updated_at: :desc)
	end 

	def create

		username = params[:username]
		title = params[:title]
		body = params[:body]

		Blog.create title: title, body: body, username: username
		#render status: 200, json: @controller.to_json
		redirect_to blogs_path
		#redirect_to "/blogs"
	end

	def update
		id = params[:id]
		title = params[:title]
		body = params[:body]

		b = Blog.find(id)
		b.update(title: title, body: body)

		render status: 200, json: @controller.to_json
	end

	def destroy
		id = params[:id]
		Blog.find(id).destroy
		redirect_to blogs_path
 
	end

end
