desc "Create santa excludeds"
task create_santa_excludeds: :environment do
  SantaExcluded.create!(santa_participant_id: 1, excluded_participant_id: 2) # Eugene, Tiffany
  SantaExcluded.create!(santa_participant_id: 2, excluded_participant_id: 1) # Tiffany, Eugene
  SantaExcluded.create!(santa_participant_id: 5, excluded_participant_id: 6) # John, Phoebe
  SantaExcluded.create!(santa_participant_id: 6, excluded_participant_id: 5) # Phoebe, John
  SantaExcluded.create!(santa_participant_id: 43, excluded_participant_id: 5) # Vania, John
  SantaExcluded.create!(santa_participant_id: 43, excluded_participant_id: 6) # Vania, Phoebe
  SantaExcluded.create!(santa_participant_id: 5, excluded_participant_id: 43) # John, Vania
  SantaExcluded.create!(santa_participant_id: 6, excluded_participant_id: 43) # Phoebe, Vania
end
