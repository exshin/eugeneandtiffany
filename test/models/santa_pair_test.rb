# == Schema Information
#
# Table name: santa_pairs
#
#  id          :bigint(8)        not null, primary key
#  santa_id    :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class SantaPairTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
