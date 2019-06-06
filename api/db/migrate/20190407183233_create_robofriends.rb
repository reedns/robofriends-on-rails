class CreateRobofriends < ActiveRecord::Migration[5.2]
  def change
    create_table :robofriends do |t|
      t.string :name, nil: false
      t.string :email

      t.timestamps
    end
  end
end
