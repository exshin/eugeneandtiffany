desc "Secret Santa Mailer"
task mail_santa: :environment do
  # Make sure you have called pairs = SantaParticipant.random_pairing(SantaParticipant.all)
  # And that it was successful
  # Then call

  while SantaPair.all.count == 0
    pairs = SantaParticipant.random_pairing(SantaParticipant.all)
    if pairs
      pairs.each do |pair|
        SantaPair.create!(santa_id: pair[:santa].id, receiver_id: pair[:receiver].id)
      end
    end
  end

  SantaMailer.send_all_mail
end
