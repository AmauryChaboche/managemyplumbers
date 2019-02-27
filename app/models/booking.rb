class Booking < ApplicationRecord
  belongs_to :intervention
  belongs_to :client
  belongs_to :user, optional: true

  def title
    "#{intervention.category} - #{client.last_name}"
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
end
