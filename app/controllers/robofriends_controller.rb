class RobofriendsController < ApplicationController
  def index
    @robofriends = Robofriend.select('id', 'name', 'email').all
    render json: @robofriends.to_json
  end
end
