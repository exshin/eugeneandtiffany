class SantaController < ActionController::Base
  protect_from_forgery with: :null_session

  def submit
    record = SantaParticipant.create!(name: params['name'],
                                      email: params['email'],
                                      address: params['address'],
                                      wish_list: params['wishList'])
    render json: {record: record}
  end
end

