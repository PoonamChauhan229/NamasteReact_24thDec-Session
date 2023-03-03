export function filteredData(allRestaurant,searchTxt){
    return allRestaurant.filter((element)=>element.data.name.toLowerCase().includes(searchTxt.toLowerCase()))
  }