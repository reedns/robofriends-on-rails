class SpeechController < ApplicationController
  def index
    robofriend = Robofriend.find(params[:robofriend_id])
    render json: { quote: robofriend.speak }
  end
end

