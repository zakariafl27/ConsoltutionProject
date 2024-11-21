import React from 'react';
import { Link } from 'react-router-dom';
import { Links } from '../tools/Links';


export default function NavLink() {
    return (
        <div className="w-full">
            <ul className="flex flex-wrap justify-center lg:justify-end space-x-4 lg:space-x-9 items-center w-full h-full">
                {Links.map((link, index) => (
                    <li key={index} className="hover:underline">
                        <Link 
                            to={link.path}
                            className="text-dark text-base md:text-lg font-semibold hover:text-slate-700"
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
