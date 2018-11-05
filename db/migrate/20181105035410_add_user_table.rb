class AddUserTable < ActiveRecord::Migration[5.2]
  create_table :users do |t|
    t.string :name
  end
end
