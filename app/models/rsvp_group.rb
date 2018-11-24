# == Schema Information
#
# Table name: rsvp_groups
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  created_at :datetime
#

class RsvpGroup < ApplicationRecord
  has_many :rsvps
end
