class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def create
    Item.create(item_params)
  end

  def destroy
  end

  def sample_show

  end

  def sample_show2

  end

end
