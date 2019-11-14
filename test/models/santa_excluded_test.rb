# == Schema Information
#
# Table name: santa_excludeds
#
#  id                      :bigint(8)        not null, primary key
#  santa_participant_id    :integer
#  excluded_participant_id :integer
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#

require 'test_helper'

class SantaExcludedTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
