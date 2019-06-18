require 'securerandom'

class Hunt < ApplicationRecord
  def self.generate_uuid
    SecureRandom.uuid
  end
end
