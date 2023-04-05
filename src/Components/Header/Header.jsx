import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex justify-between items-center '>
            {/* logo section */}
            <Link to='/' className='flex items-center'>
                <BoltIcon className="h-6 w-6 text-blue-500" />
                <h1 className='font-bold text-xl tracking-wide ml-2'>nextPage</h1>
            </Link >
            {/* navItem section */}
            <ul className=' items-center  hidden space-x-8 lg:flex '>
                <li>
                    <NavLink to="/" title='Home Link' className={({ isActive }) => isActive ? 'active' : 'default:'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='books' title='Books Link' className={({ isActive }) => isActive ? 'active' : 'default:'}>
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to='about' title='About us Link' className={({ isActive }) => isActive ? 'active' : 'default:'}>
                        About Us
                    </NavLink>
                </li>
            </ul>
            {/* mobile navbar section */}
            <div className='lg:hidden'>
                {/* dropDown Open button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Bars3BottomRightIcon className='w-6 text-gray-600' />
                </button>
                {
                    isMenuOpen && (<div className='absolute top-0 left-0 w-full z-10'>
                        <div className='p-5 bg-white border rounded-shadow-sm'>
                            {/* logo section */}
                            <Link to='/' className='flex items-center'>
                                <BoltIcon className="h-6 w-6 text-blue-500" />
                                <h1 className='font-bold text-xl tracking-wide ml-2'>nextPage</h1>
                            </Link >
                        </div>
                        <div>
                            {/* dropdown close button */}
                            <button aria-label='Close Menu'
                                title='Close Menu'
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <XMarkIcon className='w-6 text-gray-600' />
                            </button>
                            {/* navItem section */}
                            <ul className='space-y-4'>
                                <li>
                                    <NavLink to="/" title='Home Link' className='default'>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='books' title='Books Link' className='default'>
                                        Books
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='about' title='About us Link' className='default'>
                                        About Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default Header;