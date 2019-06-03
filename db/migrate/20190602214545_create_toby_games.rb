class CreateTobyGames < ActiveRecord::Migration[5.2]
  def change
    create_table :toby_games do |t|
      t.string :name
      t.integer :score

      t.timestamps
    end
  end
end
