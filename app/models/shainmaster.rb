class Shainmaster < ActiveRecord::Base
  self.table_name = :社員マスタ
  self.primary_key = :社員番号


  # default_scope { where("社員番号 is not '#{ENV['admin_user']}'")}
  
  validates :社員番号,:氏名, presence: true
  
  has_many :events, dependent: :destroy, foreign_key: :社員番号
  has_one :user, dependent: :destroy, foreign_key: :担当者コード
  belongs_to :shozai, foreign_key: :所在コード
  belongs_to :shozokumaster, foreign_key: :所属コード
  belongs_to :yakushokumaster, foreign_key: :役職コード
  
  alias_attribute :title, :氏名
  alias_attribute :id, :社員番号

  def events
    super || build_events
  end

  def user
    super || build_user
  end
end