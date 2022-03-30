import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    
    const [open, setOpen] = useState(false);

    return (
        <header className='bg-orange-400 w-full fixed'>
            <nav className='w-full px-4 py-3 lg:px-0  lg:w-5/6 mx-auto flex items-center justify-between'>
                <Link to='/' className='text-2xl font-semibold'>MealDB React</Link>
                <ul className={`w-full py-3 lg:py-0 absolute bg-indigo-300 lg:bg-inherit lg:static lg:w-auto  left-0  lg:flex z-10 lg:z-0 duration-300 ease-in lg:space-x-3 px-3 lg:px-0 ${ open? 'top-14': 'top-[-100px]'}` }>
                    <li>
                        <CustomLink to="/">Home</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/restaurant'>ResTaurant</CustomLink>
                    </li>
                    <li>
                        <CustomLink to='/about'>About</CustomLink>
                    </li>
                </ul>
                <button onClick={() => setOpen(!open)} className='w-7 h-7 lg:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </button>
            </nav>
        </header>
    );  
};  

export default Header;