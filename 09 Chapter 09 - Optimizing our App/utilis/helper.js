export function filteredData(restaurant,searchTxt){
    return restaurant.filter((element)=>element?.data?.name?.toLowerCase().includes(searchTxt?.toLowerCase()))
}