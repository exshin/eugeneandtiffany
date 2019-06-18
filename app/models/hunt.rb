# == Schema Information
#
# Table name: hunts
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  hexdigest  :string
#  progress   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'securerandom'

class Hunt < ApplicationRecord
  def self.generate_uuid
    SecureRandom.uuid
  end
end
