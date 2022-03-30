import React from 'react';

const Restaurant = () => {
    return (
        <section className='bg-gray-50 pt-16'>
            <div className="mx-auto w-5/6">
                <div className="search-section flex mx-auto w-2/6 py-5 px-3">
                    <input placeholder='Search your meal' className='w-full outline-none rounded-sm px-2' type="text" />
                    <button className='bg-orange-400 text-white py-1 px-3 rounded-sm duration-300 hover:text-orange-400 hover:bg-transparent border-2 border-orange-400'>Search</button>
                </div>
                <div className="grid grid-cols-3">
                    
                </div>
            </div>
        </section>
    );
};

export default Restaurant;