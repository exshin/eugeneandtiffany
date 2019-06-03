class TobyGameController < ActionController::Base
  protect_from_forgery with: :null_session

  def high_scores
    high_scores = TobyGame.all.order(score: :desc)
    render json: {
        high_scores: high_scores
    }
  end

  def score
    score = TobyGame.create(name: params['name'],
                       score: params['score'],
                       created_at: Time.now)
    render json: {score: score}
  end
end

