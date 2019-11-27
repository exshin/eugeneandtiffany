class SantaMailer < ApplicationMailer
  require 'mailgun-ruby'

  API_KEY = ENV['MAILGUN_API_KEY']
  MAILGUN_DOMAIN = ENV['MAILGUN_DOMAIN']

  def mail(santa, receiver)
    mg_client = Mailgun::Client.new(API_KEY)

    message_params =  {
        from:    'chinveeraphan.wu@gmail.com',
        to:      to_address(santa),
        subject: subject,
        html:    html_body(santa, receiver)
    }

    mg_client.send_message MAILGUN_DOMAIN, message_params
  end

  def self.send_all_mail
    SantaPair.all.each do |santa_pair|
      santa = SantaParticipant.find(santa_pair.santa_id)
      receiver = SantaParticipant.find(santa_pair.receiver_id)
      mail(santa, receiver)
    end
  end

  private

  def html_body(santa, receiver)
    recipient_name = receiver[:name]
    wish_list = receiver[:wish_list]
    address = receiver[:address]

    l1 = "<div>Dear Santa #{santa[:name].titleize.split(" ").first},</div>"
    l2 = "<div>Your Secret Santa recipient is: #{recipient_name.titleize}!</div>"
    l3 = "<div>Here's what they've listed in their wish list: #{wish_list}</div>"
    l4 = "<div>And their mailing address: #{address}</div>"
    l5 = "<div>Remember, the limit is $30 dollar pre-tax/shipping!</div>"
    l6 = "<div>Thanks for participating!</div>"

    "<html><body>#{l1}<br/>#{l2}<br/>#{l3}#{l4}<br/>#{l5}#{l6}</body></html>"
  end

  def subject
    "Wildcats Secret Santa 2019"
  end

  def to_address(santa)
    santa[:email]
  end
end
