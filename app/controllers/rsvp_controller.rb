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

  def submit_rsvps
    begin
      params.each do |id, updates|
        rsvp = Rsvp.find_by(id: id)
        next unless rsvp

        rsvp.first_name = updates['first_name'] if updates['first_name']
        rsvp.last_name = updates['last_name'] if updates['last_name']
        rsvp.attending = updates['attending'] if updates['attending']
        rsvp.dietary_restrictions = updates['dietary_restrictions'] if updates['dietary_restrictions']

        rsvp.save!
      end
      render json: {result: 'success'}
    rescue => e
      render json: {result: 'fail', error: e}
    end
  end
end
