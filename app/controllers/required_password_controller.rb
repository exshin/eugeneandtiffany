class RequiredPasswordController < ActionController::Base
  def show
  end

  def password
    required_guest_password = ENV['SANTA_PASSWORD'] || 'guest'
    required_admin_password = ENV['ADMIN_PASSWORD'] || 'admin'

    if params['password'] == required_guest_password
      token = Token.create!(hexdigest: Digest::SHA1.hexdigest([Time.now, rand].join), admin: false)
      render json: {auth: true, admin: false, token: token.hexdigest}
    elsif params['password'] == required_admin_password
      token = Token.create!(hexdigest: Digest::SHA1.hexdigest([Time.now, rand].join), admin: true)
      render json: {auth: true, admin: true, token: token.hexdigest}
    else
      render json: {auth: false, admin: false, token: nil}
    end
  end

  def santa_password
    required_santa_password = ENV['SANTA_PASSWORD'] || 'guest'

    if params['password'] == required_santa_password
      token = Token.create!(hexdigest: Digest::SHA1.hexdigest([Time.now, rand].join), admin: false)
      render json: {auth: true, admin: false, token: token.hexdigest}
    else
      render json: {auth: false, admin: false, token: nil}
    end
  end
end

