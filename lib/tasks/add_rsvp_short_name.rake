desc "Add name index to rsvps"
task add_rsvp_short_name: :environment do

  Rsvp.all.each do |rsvp|
    rsvp.short_name = rsvp.first_name.downcase + rsvp.last_name.downcase
    rsvp.save!
  end
end
