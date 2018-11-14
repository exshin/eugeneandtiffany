class QuizController < ActionController::Base
  protect_from_forgery with: :null_session

  def high_scores
    tiffany_scores = Quiz.tiffany_high_scores.limit(10)
    eugene_scores = Quiz.eugene_high_scores.limit(10)
    render json: {tiffany_scores: tiffany_scores, eugene_scores: eugene_scores}
  end

  def score
    tiffany_answers = params['user_tiffany_answers'].to_s
    eugene_answers = params['user_eugene_answers'].to_s
    quiz = Quiz.create(name: params['name'],
                 tiffany_score: params['tiffany_score'],
                 eugene_score: params['eugene_score'],
                  user_tiffany_answers: tiffany_answers,
                  user_eugene_answers: eugene_answers)
    render json: quiz
  end
end
