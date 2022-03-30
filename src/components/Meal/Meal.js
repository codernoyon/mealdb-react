import React from 'react';

const Meal = ({ meal }) => {
    const { strMeal, strInstructions, strMealThumb } = meal;
    return (
        <div className='rounded-md overflow-hidden shadow-md duration-300 hover:shadow-xl'>
            <div>
                <img src={strMealThumb} alt="" className="w-full" />
            </div>
            <div className='px-3 py-3'>
                <h3 className="text-2xl font-semibold mb-1">{strMeal}</h3>
                <p className="text-base mb-3">{strInstructions.slice(0, 100) + "..."}</p>
                <button className='bg-orange-400 py-1 px-3 border border-orange-400 rounded-sm text-white duration-300 hover:bg-transparent hover:text-orange-400'>See Details</button>
            </div>
        </div>
    );
};

export default Meal;