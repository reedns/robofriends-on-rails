class RobofriendsController < ApplicationController
  def index
    robofriends = Robofriend.select('id', 'name', 'email').all
    render json: robofriends
  end
end
