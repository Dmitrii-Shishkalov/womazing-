import React from 'react'
import style from './Cart.module.scss'
import close from '../../Assets/img/close.svg'
import { useSelector } from 'react-redux';
import { CartEmpty, CartItem, } from '../../Componets'
import { clearItem, selectCart, CartProps } from '../../redux/Slices/cart';
import { useAppDispatch } from '../../redux/store';
export const Cart: React.FC = () => {
    const cartList = ['Товар', 'Цена', 'Количество', 'Размер', 'Всего'];
    const dispatch = useAppDispatch();
    const { items, totalPrice } = useSelector(selectCart);
    const onClickClear = () => {
        if (window.confirm('вы действительно хотите очистить корзину?')) {
            dispatch(clearItem(),)
        }
    }
    if (!totalPrice) {
        return <CartEmpty />
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.breadcrumbs}>
                    <h1>
                        Корзина
                    </h1>
                    <p>Главная —  <span>Корзина</span></p>
                </div>
                <div className={style.root}>
                    <ul className={style.cartList}>
                        {cartList.map((objName, i) => (
                            <li key={i} className={style.listItem}>
                                {objName}
                            </li>
                        ))}
                    </ul>
                    <div className={style.cartItemWrap}>
                        {items.map((item: CartProps) => (<CartItem key={item.id} {...item} />))}
                    </div>
                </div>
                <button onClick={onClickClear} className={style.btnGhost}>Очистить корзину</button>
                <div className={style.CheckOutBlock}>
                    <div className={style.totalBlock}>
                        <h3>Итого:</h3>
                        <p>${totalPrice}</p>
                    </div>
                    <button>Оформить заказ</button>
                </div>

            </div>
        </>
    )
}
