import React from 'react'
import style from './cartItem.module.scss'
import close from '../../Assets/img/close.svg'
import { addItem, minusItem, removeItem, CartProps } from '../../redux/Slices/cart'
import { useAppDispatch } from '../../redux/store'

export const CartItem: React.FC<CartProps> = ({ id, title, size, price, count, imageUrl }) => {
    const dispatch = useAppDispatch();
    const onClickPlus = () => {
        dispatch(addItem({ id }),)
    }
    const onClickMinus = () => {
        dispatch(minusItem(id),)
    }
    const onClickRemove = () => {
        if (window.confirm('вы действительно хотите удалить товар?')) {
            dispatch(removeItem(id),)
        }
    }

    return (
        <>
            <div className={style.cartProduct}>
                <img onClick={onClickRemove} className={style.close} src={close} alt="" />
                <img className={style.cartImg} src={imageUrl} alt="" />
                <h4 className={style.cartTitle}>
                    {title}
                </h4>
                <p className={style.cartPrice}>
                    ${price}
                </p>
                <button  disabled={count === 1}
                    onClick={onClickMinus} className={style.minus}>-</button>
                <p className={style.count}>
                    {count}
                </p>
                <button onClick={onClickPlus} className={style.plus}>+</button>
                <div className={style.addCount}>


                </div>

                <p className={style.Size}>
                    {size}
                </p>
                <p className={style.cartTotal}>
                    ${price * count}
                </p>
            </div>

        </>
    )
}

