import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <section className="h-screen h-screen flex items-center justify-center home">
            <div className='w-3/6'>
                <h1 className="text-4xl font-bold text-white">Welcome to The MealDB React</h1>
                <p className='text-gray-300'>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.
                </p>
            </div>
        </section>
    );
};

export default Home;