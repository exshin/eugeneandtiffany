class BlocksController < ActionController::Base
  protect_from_forgery with: :null_session

  def high_scores
    high_scores = Block.all.order(score: :desc).limit(20)
    render json: {high_scores: high_scores}
  end

  def score
    score = Block.create(name: params['name'], score: params['score'])
    render json: {score: score}
  end
end

