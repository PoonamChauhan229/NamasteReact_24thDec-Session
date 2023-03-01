const Shimmer=()=>{
    return(
        <>
              <div className="restaurant-list">
                {Array(10).fill("").map((element,index)=><div className="shimmer-card" key={index}> </div>
                )}
              </div>
        </>
    )
}
export default Shimmer;