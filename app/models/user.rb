class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :bookings
  belongs_to :manager, class_name: "User", foreign_key: "user_id"

  def manager?
    manager.nil?
  end

  def employee?
    !is_manager
  end

  def employees
    User.where user_id: id
  end
end
