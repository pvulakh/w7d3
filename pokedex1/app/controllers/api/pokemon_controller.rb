class Api::PokemonController < ApplicationController 
    def index 
        @pokemon = Pokemon.all 
        render :index
    end 

    def show
        @poke = Pokemon.find_by(id: params[:id])
        @items = @poke.items 
        render :show
    end 
end 