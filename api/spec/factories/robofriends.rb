FactoryBot.define do
  factory :robofriend do
    name { Faker::Name.name }
    email { Faker::Internet.email }
  end
end
