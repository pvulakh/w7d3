json.extract! @party, :name
json.guests do 
    json.array! @guests do |guest|
        json.extract! guest, :name 
        json.gifts do 
            json.array! guest.gifts, :title, :description
        end 
    end 
end 