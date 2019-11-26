# == Schema Information
#
# Table name: santa_participants
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  address    :string
#  email      :string
#  wish_list  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SantaParticipant < ApplicationRecord
  def self.random_pairing(participants)
    # Takes an array of participants objects
    # Returns an array of hashes: [{santa: 'Tiffany', receiver: 'John'},...] where
    #   Tiffany == gift ==> John
    # Rules:
    # 1) The Santa and the Receiver cannot be in the "excluded" list for each participant
    # 2) The Santa cannot be the Receiver for the same participant and vice versa

    random_pairs = []
    santa_participant_ids = participants.pluck(:id)
    receiver_participant_ids = participants.pluck(:id)

    while santa_participant_ids.length > 0 do
      # Randomly choose the santa and remove from the list of participants
      santa = SantaParticipant.find(santa_participant_ids.sample)
      santa_participant_ids.delete(santa.id)

      # Ensure the Receiver is not in the Santa's excluded list
      excluded_list = SantaExcluded.where(santa_participant_id: santa.id).pluck(:excluded_participant_id)
      new_participants_list = receiver_participant_ids - excluded_list - [santa.id]

      # If there are no possible participants left, we must retry..
      if new_participants_list.empty?
        random_pairs = []
        puts "Random Generator Failed on #{santa.name}"
        return nil
      end

      # Randomly choose the receiver and remove the receiver from the list
      receiver = SantaParticipant.find(new_participants_list.sample)
      receiver_participant_ids.delete(receiver.id)

      random_pairs << {santa: santa, receiver: receiver }
    end

    random_pairs
  end
end
