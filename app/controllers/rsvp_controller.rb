class RsvpController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    rsvps = []
    RsvpGroup.all.each do |group|
      group.rsvps.each do |rsvp|
        rsvps << rsvp unless rsvp.first_name == 'Boh'
      end
    end
    render json: {rsvps: rsvps}
  end

  def find_groups_by_name
    rsvp = Rsvp.find_by(first_name: params['first_name'].capitalize,
                        last_name: params['last_name'].capitalize)
    rsvp = Rsvp.find_by(short_name: params['first_name'].downcase + params['last_name'].downcase) unless rsvp
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
