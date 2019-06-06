class SpeechController < ApplicationController
  def index
    robofriend = Robofriend.find(params[:robofriend_id])
    render json: { id: robofriend.id, quote: robofriend.speak }
  end
end

