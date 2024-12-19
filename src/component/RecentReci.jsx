import React, { useEffect, useState } from 'react'

const RecentReci = () => {

const [recentReci,setRecentReci] = useState([]);

const getRecentReci = async () =>{
    const idMeals = [52805,53064,52900,52962,53018,53014,53065,53078];
try{
    const fetchDetails = idMeals.map((id)=>
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    );
    const responses = await Promise.all(fetchDetails);
    const data =await Promise.all(responses.map((response)=>response.json()));
    const mealsData = data.map((meal)=>meal.meals[0])
    setRecentReci(mealsData)
    console.log(mealsData)
}catch(error){
    console.error("Error Fetching Recipes:",error)

}
}


useEffect(()=>{
getRecentReci();
},[])





  return (
    <div>
      <h1 className="text-center text-3xl font-black mt-20 mb-8">RECENT RECIPES</h1>
      <div className="grid grid-cols-4 gap-12 p-52 -mt-52 cursor-pointer">
      {recentReci.map((reci)=>{
        return(
            <div className="group text-center"
            key={reci.idMeal}>
                <img src={reci.strMealThumb} alt={reci.strMeal}
                className="hover:scale-90 transition-all duration-300"
                style={{ width: "300px", borderRadius: "8px" }}/>
                <h1 className="text-xl font-semibold text-center p-1 text-teal-500  group-hover:text-orange-600 transition-colors duration-300">{reci.strMeal}</h1>
            </div>
        )
    })} 
      </div>
    
    </div>
  )
}

export default RecentReci
