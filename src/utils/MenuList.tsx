import React from 'react'
import { Link } from 'react-router-dom'
export const menuList = [
    { name: 'Главная', ref: "/womazing " },
    { name: 'Магазин', ref: "/shop" },
    { name: 'О бренде', ref: "/brands" },
    { name: 'Контакты', ref: "/contact" },
]

export const MenuList = () => {
    return (
        <ul>

            {menuList.map((obj, i) =>
                <li key={i} >
                    <Link to={obj.ref}>{obj.name}</Link>
                </li>)
            }
        </ul >
    )
}
