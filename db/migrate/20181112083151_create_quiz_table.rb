class CreateQuizTable < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :name
      t.integer :eugene_score
      t.integer :tiffany_score
      t.text :user_tiffany_answers
      t.text :user_eugene_answers
    end
  end
end
