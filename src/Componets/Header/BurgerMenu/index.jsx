import React from 'react'
import { Link } from 'react-router-dom'
import { burgerMenu } from '../reference'
import style from './BurgerMenu.module.scss'
export const BurgerMenu = () => {
    const [nav, setNav] = React.useState(false);
    // const burgerRef = React.useRef();

    // React.useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (!event.path.includes(burgerRef.current)) {
    //             setNav(false);
    //         }
    //     };
    //     document.body.addEventListener('click', handleClickOutside);
    //     return () => document.body.removeEventListener('click', handleClickOutside);
    // }, []);
    return (
        <div className={style.root}>
            <div onClick={() => setNav(!nav)} className={style.burgerImg}>
                <img src={burgerMenu} alt="" />
            </div>
            <ul className={nav ? [style.burgerMenu, style.active].join(' ') : [style.burgerMenu]}>
                <li>
                    <Link to={'/womazing '}>Главная</Link>
                </li>
                <li>
                    <Link to={'/shop'}>Магазин</Link>
                </li>
                <li>
                    <Link to={'/brands'}>O бренде</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Контакты</Link>
                </li>
                <li>
                    <Link to={'/cart'}>Корзина</Link>
                </li>
            </ul>
        </div >
    )
}
