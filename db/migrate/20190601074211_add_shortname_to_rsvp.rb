class AddShortnameToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :short_name, :string
  end
end
