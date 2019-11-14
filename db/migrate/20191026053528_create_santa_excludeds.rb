class CreateSantaExcludeds < ActiveRecord::Migration[5.2]
  def change
    create_table :santa_excludeds do |t|
      t.integer :santa_participant_id, foreign_key: true
      t.integer :excluded_participant_id, foreign_key: true
      t.timestamps
    end
  end
end
