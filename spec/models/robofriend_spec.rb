require 'rails_helper'

RSpec.describe Robofriend, type: :model do
  describe '#speak' do
    it 'returns a string' do
      robofriend = create(:robofriend)
      expect(robofriend.speak).to be_a(String)
    end
  end
end
