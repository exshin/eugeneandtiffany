desc "Create santa excludeds"
task create_santa_excludeds: :environment do
  SantaExcluded.create!(santa_participant_id: 1, excluded_participant_id: 2) # Eugene, Tiffany
  SantaExcluded.create!(santa_participant_id: 2, excluded_participant_id: 1) # Tiffany, Eugene
  SantaExcluded.create!(santa_participant_id: 5, excluded_participant_id: 6) # John, Phoebe
  SantaExcluded.create!(santa_participant_id: 6, excluded_participant_id: 5) # Phoebe, John
end
