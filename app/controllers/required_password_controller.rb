class RequiredPasswordController < ActionController::Base
  def show
  end

  def password
    required_guest_password = ENV['REQUIRED_GUEST_PASSWORD'] || 'guest'
    required_admin_password = ENV['REQUIRED_GUEST_PASSWORD'] || 'admin'

    if params['password'] == required_guest_password
      render json: {auth: true, admin: false}
    elsif params['password'] == required_admin_password
      render json: {auth: true, admin: true}
    else
      render json: {auth: false, admin: false}
    end
  end
end

