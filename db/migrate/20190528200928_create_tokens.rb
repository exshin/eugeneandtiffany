class CreateTokens < ActiveRecord::Migration[5.2]
  def change
    create_table :tokens do |t|
      t.string :hexdigest
      t.boolean :admin

      t.timestamps
    end
  end
end
