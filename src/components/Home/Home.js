import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const navigate = useNavigate();
    const goFoods = () => {
        const path = "/restaurant";
        navigate(path);
    }
    return (
        <section className="h-screen h-screen flex items-center justify-center home">
            <div className='w-3/6 text-center space-y-3'>
                <h1 className="text-4xl font-bold text-white">Welcome to The MealDB React</h1>
                <p className='text-gray-300'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.
                </p>
                <button onClick={goFoods} className='text-lg text-white bg-orange-400 py-1 px-3 border border-orange-400 rounded-sm hover:bg-transparent hover:text-orange-400'>Find Foods</button>
            </div>
        </section>
    );
};

export default Home;