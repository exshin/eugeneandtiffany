class TokensController < ActionController::Base
  protect_from_forgery with: :null_session

  def find_token
    token = Token.find_by(hexdigest: params['token'])
    render json: {token: token, admin: token.admin}
  end
end
