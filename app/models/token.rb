# == Schema Information
#
# Table name: tokens
#
#  id         :bigint(8)        not null, primary key
#  hexdigest  :string
#  admin      :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Token < ApplicationRecord
end
