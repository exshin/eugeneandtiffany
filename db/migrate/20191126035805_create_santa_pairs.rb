class CreateSantaPairs < ActiveRecord::Migration[5.2]
  def change
    create_table :santa_pairs do |t|
      t.integer :santa_id
      t.integer :receiver_id

      t.timestamps
    end
  end
end
