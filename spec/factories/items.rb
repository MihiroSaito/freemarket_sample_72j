FactoryBot.define do

  factory :item do
    name              {"ペン"}
    price             {"1000"}
    explain           {"あいうえお"}
    postage           {"着払い (購入者負担)"}
    prefecture        {"北海道"}
    shipping_date     {"1~2日で発送"}
    category          {"1"}
    item_status       {"新品、未使用"}
  end

end