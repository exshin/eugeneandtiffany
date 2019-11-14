class CreateSantaParticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :santa_participants do |t|
      t.string :name
      t.string :address
      t.string :email
      t.string :wish_list

      t.timestamps
    end
  end
end
