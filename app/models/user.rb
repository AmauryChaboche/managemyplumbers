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
    first_name
  end

  def dow
    [ 1, 2, 3, 4, 5 ]
  end

  def start_hour
    if starting_hour.nil?
      '9:00'
    else
      "#{starting_hour.hour}:00"
    end
  end

  def end_hour
    if starting_hour.nil?
      '18:00'
    else
      "#{ending_hour.hour}:00"
    end
  end

  def businessHours
    { start: start_hour, end: end_hour }
  end
end
