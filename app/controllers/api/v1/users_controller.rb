class Api::V1::UsersController < Api::V1::BaseController
  def index
    @users = User.employees
  end

  def hours
    @users = [User.first]
  end
end
