import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    },[searchText])

    const searchMeal = (e) => {
        setSearchText(e.target.value)
    }

    return (
        <section className='bg-gray-50 pt-16'>
            <div className="mx-auto w-5/6 ">
                <div className="search-section flex mx-auto w-full md:w-3/6 lg:w-2/6 py-5 md:px-3 mb-3">
                    <input onChange={searchMeal} placeholder='Search your meal' className='w-full outline-none rounded-sm px-2' type="text" />
                    <button className='bg-orange-400 text-white py-1 px-3 rounded-sm duration-300 hover:text-orange-400 hover:bg-transparent border border-orange-400'>Search</button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        meals?.map(meal => <Meal meal={meal} key={meal.idMeal} />)
                    }
                </div>
            </div>
        </section>
    );  
};

export default Restaurant;