class CreateRsvpTable < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvp do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.boolean :attending
      t.text :dietary_restrictions
    end
  end
end
