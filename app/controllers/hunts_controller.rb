class HuntsController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    render json: {hunts: Hunt.all.order(progress: :desc)}
  end

  def progress
    if params['hexdigest'] && params['hexdigest'] != ''
      hunt = Hunt.find_by(hexdigest: params['hexdigest'])
      hunt.update(progress: params['progress'].to_i) if hunt
    else
      hexdigest = Hunt.generate_uuid
      hunt = Hunt.create!(name: params['name'], hexdigest: hexdigest, progress: params['progress'])
    end

    render json: {hunt: hunt}
  end

  def fetch_name
    hunt = Hunt.find_by(hexdigest: params['hexdigest'])
    render json: {hunt: hunt}
  end
end
