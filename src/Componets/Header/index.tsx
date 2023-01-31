import React from 'react'
import style from './Header.module.scss'
import { logo, phone, cart } from './reference'
import { MenuList } from '../../utils/MenuList'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/Slices/cart'
import { BurgerMenu } from './BurgerMenu'
export const Header: React.FC = () => {
    const { items } = useSelector(selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)
    const isMounted = React.useRef(false);
    React.useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json);
        }
        isMounted.current = true;
    }, [items]);
    return (

        <div className={style.container}>
            <div className={style.header}>
                <Link to={'/womazing '}>
                    <img src={logo} alt="" />
                </Link>
                <MenuList />
                <div className={style.contact}>
                    <img src={phone} alt="" />
                    <p>+7 (495) 823-54-12</p>
                </div>
                <Link className={style.cart} to={'/Cart'}>
                    <img src={cart} alt="" />
                    {totalCount > 0 && <span className={style.indexCart}>{totalCount}</span>}
                </Link>
                <BurgerMenu />
            </div>
        </div>
    )
}
