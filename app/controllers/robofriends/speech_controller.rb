class Robofriends::SpeechController < ApplicationController
  def index
    robofriend = Robofriend.find(params[:id])
    render json: { speech: @robofriend.speak }
  end
end
