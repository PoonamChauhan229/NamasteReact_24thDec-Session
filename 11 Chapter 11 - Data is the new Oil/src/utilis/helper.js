export function filteredData(searchTxt,allRestaurant){
    return allRestaurant.filter((element)=>element.data.name.toLowerCase().includes(searchTxt.toLowerCase()))
}