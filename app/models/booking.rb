class Booking < ApplicationRecord
  belongs_to :intervention
  belongs_to :client
  belongs_to :user, optional: true
  validates :intervention, presence: true
  def title
    "#{intervention.category} \n #{client.first_name} #{client.last_name}"
  end

  def start
    # start_date.strftime("%s%3N")
    start_date
  end

  def end
    # end_date.strftime("%s%3N")
    end_date
  end

  def resourceId
    user.id
  end

  # def constraint
  #   array = []
  #   user_array = User.all
  #   user_array.map do |user|
  #     array << user[:id]
  #   end
  #   hash_hours = {
  #     resourceIds: array
  #   }
  # end
end
