class CreateHunt < ActiveRecord::Migration[5.2]
  def change
    create_table :hunts do |t|
      t.string :name
      t.string :hexdigest
      t.integer :progress

      t.timestamps
    end
  end
end
