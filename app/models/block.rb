# == Schema Information
#
# Table name: blocks
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  score      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Block < ApplicationRecord
end
