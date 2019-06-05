class AddChildToRsvp < ActiveRecord::Migration[5.2]
  def change
    add_column :rsvps, :no_drink, :boolean
  end
end
