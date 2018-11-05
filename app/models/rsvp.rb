# == Schema Information
#
# Table name: rsvps
#
#  id                   :bigint(8)        not null, primary key
#  first_name           :string
#  last_name            :string
#  email                :string
#  attending            :boolean
#  dietary_restrictions :text
#

class Rsvp < ApplicationRecord
end
