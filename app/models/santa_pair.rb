# == Schema Information
#
# Table name: santa_pairs
#
#  id          :bigint(8)        not null, primary key
#  santa_id    :integer
#  receiver_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SantaPair < ApplicationRecord
  def self.print_email(santa_id, receiver_id)
    santa = SantaParticipant.find(santa_id)
    receiver = SantaParticipant.find(receiver_id)

    recipient_name = receiver[:name]
    wish_list = receiver[:wish_list]
    address = receiver[:address]

    puts "Dear Santa #{santa[:name].titleize.split(" ").first},"
    puts
    puts "Your Secret Santa recipient is: #{recipient_name.titleize}!"
    puts
    puts "Here's what they've listed in their wish list: #{wish_list}"
    puts "And their mailing address: #{address}"
    puts
    puts "Remember, the limit is $30 dollar pre-tax/shipping!"
    puts "Thanks for participating!"
    puts
  end

  def self.print_emails
    SantaPair.all.each do |santa_pair|
      puts SantaParticipant.find(santa_pair.santa_id).email
      SantaPair.print_email(santa_pair.santa_id, santa_pair.receiver_id)
      puts "------"
      puts
      puts
    end
  end
end
