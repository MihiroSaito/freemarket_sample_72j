class TopPageController < ApplicationController
  def index
    @items = Item.includes(:item_images).order(created_at: :desc)
    @item = Item.find_by(id: params[:id])
    @brands = @items.where(brand: "シャネル").order(created_at: :desc)
  end

end
