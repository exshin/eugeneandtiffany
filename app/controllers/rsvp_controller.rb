class RsvpController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    render json: {rsvps: Rsvp.all}
  end

  def find_groups_by_name
    rsvp = Rsvp.find_by(first_name: params['first_name'].capitalize,
                        last_name: params['last_name'].capitalize)
    rsvps = rsvp ? rsvp.rsvp_group.rsvps : []

    render json: {rsvps: rsvps}
  end
end
