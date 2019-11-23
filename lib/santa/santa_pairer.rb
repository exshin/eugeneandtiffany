# frozen_string_literal: true

module SantaPairer
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

      random_pairs << {santas: santa, receiver: receiver }
    end

    random_pairs
  end
end

def fill_sample_data
  t = SantaParticipant.create!(name: "Tiffany", address: "123 address", wish_list: "all the things!")
  e = SantaParticipant.create!(name: "Eugene", address: "123 address", wish_list: "all the things!")
  j = SantaParticipant.create!(name: "John", address: "88 Nowhere", wish_list: "all the things!")
  p = SantaParticipant.create!(name: "Phoebe", address: "88 Nowhere", wish_list: "all the things!")
  c = SantaParticipant.create!(name: "Chiarng", address: "Chiarng", wish_list: "all the things!")
  v = SantaParticipant.create!(name: "Vania", address: "Vania", wish_list: "all the things!")
  SantaExcluded.create!(santa_participant_id: t.id, excluded_participant_id: e.id)
  SantaExcluded.create!(santa_participant_id: e.id, excluded_participant_id: t.id)
  SantaExcluded.create!(santa_participant_id: j.id, excluded_participant_id: p.id)
  SantaExcluded.create!(santa_participant_id: p.id, excluded_participant_id: j.id)
  SantaExcluded.create!(santa_participant_id: v.id, excluded_participant_id: p.id)
  SantaExcluded.create!(santa_participant_id: p.id, excluded_participant_id: v.id)
end


