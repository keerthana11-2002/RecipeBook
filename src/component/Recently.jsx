 
import React from 'react'
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {idMeals1} from "../api/recipesAPI"

const Recently = () => {
    const [recently,setRecently] = useState([]);
    const navigate = useNavigate();
    
    const getRecently = async () =>{
      

        const fetchDetails = idMeals1.map((id)=>
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        );
        const responses = await Promise.all(fetchDetails);
        const mealsData = await Promise.all(responses.map((response)=>response.json()));
        const allData = mealsData.map((meal)=>meal.meals[0])
        setRecently(allData);

    }
    
    
    useEffect(()=>{
    getRecently();
    },[])

    const HandleClickImages = (idMeal,strMeal) =>{
      const mealName = strMeal.toLowerCase().replace(/\s+/g,"")
    navigate(`/${idMeal}/${mealName}`);
    }
    
  return (
    <div>
      <h1 className="text-center text-3xl font-black -mt-36 mb-5">RECENTLY UPDATED</h1> 
      <div className="grid grid-cols-4 gap-12 p-52 -mt-52 cursor-pointer">
        {recently.map((item) => (
          <div key={item.idMeal} className="group text-center" onClick={()=>HandleClickImages(item.idMeal,item.strMeal)}>
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="hover:scale-90 transition-all duration-300"
              style={{ width: "300px", borderRadius: "8px" }}
            />
            <h1 className="text-xl font-semibold text-center p-1 text-teal-500  group-hover:text-orange-600 transition-colors duration-300">
              {item.strMeal}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recently
