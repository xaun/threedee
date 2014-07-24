# == Schema Information
#
# Table name: settings
#
#  id            :integer          not null, primary key
#  visualiser_id :integer
#  settings      :string(255)
#  user_id       :string(255)
#

class Settings < ActiveRecord::Base
  belongs_to :user
end
