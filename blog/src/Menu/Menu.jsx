import React from 'react'
import { Link } from "react-router-dom";

import './Menu.scss'
const links = [
    { title: 'Main page', to: "/" },
    { title: 'About', to: "/about" },
    { title: 'Contacts', to: "/contacts" },
    { title: 'Blog', to: "/blog" },
    { title: 'Add Post', to: "/add-post" }
]

export const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                {links.map((link) => {
                   return <li key={link.title}><Link to={link.to}>{link.title}</Link></li>
                })} 
            </ul>
        </nav>
    )
}
