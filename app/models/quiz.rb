# == Schema Information
#
# Table name: quizzes
#
#  id                   :bigint(8)        not null, primary key
#  name                 :string
#  eugene_score         :integer
#  tiffany_score        :integer
#  user_tiffany_answers :text
#  user_eugene_answers  :text
#  created_at           :datetime
#

class Quiz < ApplicationRecord
  scope :tiffany_high_scores, -> { where('tiffany_score > eugene_score').order(tiffany_score: :desc) }
  scope :eugene_high_scores, -> { where('eugene_score > tiffany_score').order(eugene_score: :desc) }
  scope :tied_high_scores, -> { where('eugene_score = tiffany_score').order(created_at: :desc) }
end
