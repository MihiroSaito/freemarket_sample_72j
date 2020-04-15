class TopPageController < ApplicationController
  def index
    @items = Item.order(created_at: :desc)
    @item = Item.find_by(id: params[:id])
    @brands = Brand.order(created_at: :desc)
    @images = ItemImage.order(created_at: :desc)
  end

end
