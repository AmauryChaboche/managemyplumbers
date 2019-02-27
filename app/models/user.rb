class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :bookings, dependent: :destroy
  belongs_to :manager, class_name: "User", foreign_key: "user_id", optional: true

  def manager?
    manager.nil?
  end

  def employee?
    !is_manager
  end

  def employees
    User.where user_id: id
  end

  def self.employees
    User.where.not(user_id: nil)
  end

  def self.managers
    User.where(user_id: nil)
  end

  def title
    email
  end

  def dow
    [ 1, 2, 3, 4, 5 ]
  end

  def starting_hour
    '14:00'
  end

  def ending_hour
    '18:00'
  end

  def businessHours
    { start: starting_hour , end: ending_hour }
  end
end
