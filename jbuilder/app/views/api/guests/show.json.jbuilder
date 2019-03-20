
json.extract! @guest, :name, :age, :favorite_color 
json.gifts do 
    @guest.gifts.each do |gift| 
        json.extract! gift, :description, :title
    end
end
