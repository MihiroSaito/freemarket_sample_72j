class TopPageController < ApplicationController
  def index
    @items = Item.includes(:item_images).order(created_at: :desc)
    @item = Item.find_by(id: params[:id])
    @brands = @items.where(brand: "シャネル").order(created_at: :desc)
    @images = ItemImage.order(created_at: :desc)
    @buyerBrand = Buyer.pluck(:item_id)
  end

end
