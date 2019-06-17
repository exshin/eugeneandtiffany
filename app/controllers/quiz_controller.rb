class QuizController < ActionController::Base
  protect_from_forgery with: :null_session

  def high_scores
    tiffany_scores = Quiz.tiffany_high_scores
    eugene_scores = Quiz.eugene_high_scores
    latest_tied_high_scores = Quiz.tied_high_scores

    render json: {
        tiffany_scores: tiffany_scores,
        eugene_scores: eugene_scores,
        latest_tied_high_scores: latest_tied_high_scores
    }
  end

  def score
    tiffany_answers = params['user_tiffany_answers'].to_s
    eugene_answers = params['user_eugene_answers'].to_s
    quiz = Quiz.create(name: params['name'],
                       tiffany_score: params['tiffany_score'],
                       eugene_score: params['eugene_score'],
                       user_tiffany_answers: tiffany_answers,
                       user_eugene_answers: eugene_answers,
                       created_at: Time.now)
    render json: quiz
  end

  def all_scores
    tiffany_scores = Quiz.tiffany_high_scores
    eugene_scores = Quiz.eugene_high_scores
    latest_tied_high_scores = Quiz.tied_high_scores

    render json: {
        tiffany_scores: tiffany_scores,
        eugene_scores: eugene_scores,
        latest_tied_high_scores: latest_tied_high_scores
    }
  end
end

