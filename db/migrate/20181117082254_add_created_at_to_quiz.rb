class AddCreatedAtToQuiz < ActiveRecord::Migration[5.2]
  def change
    add_column :quizzes, :created_at, :datetime
  end
end
