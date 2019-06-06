class Robofriend < ApplicationRecord
  def speak
    Faker::Hacker.say_something_smart
  end
end
