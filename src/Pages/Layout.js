import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div>
        <ul style={{listStyle:"none",Display:"Inline-Block"}}>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/blogs'>Blogs</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/nopage'>NoPage</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}
