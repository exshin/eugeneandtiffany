# == Schema Information
#
# Table name: santa_participants
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  address    :string
#  email      :string
#  wish_list  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SantaParticipant < ApplicationRecord
end
