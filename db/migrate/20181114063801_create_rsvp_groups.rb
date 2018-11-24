class CreateRsvpGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :rsvp_groups do |t|
      t.string :name
      t.datetime :created_at
    end
  end
end
