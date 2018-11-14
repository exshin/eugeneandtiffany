class RsvpController < ActionController::Base
  protect_from_forgery with: :null_session

  def rsvps
    rsvps = []

    render json: rsvps
  end
end

