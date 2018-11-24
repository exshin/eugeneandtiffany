class AddGroupIdColumnToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :rsvp_group_id, :integer
    add_column :rsvps, :updated_at, :datetime
  end
end
