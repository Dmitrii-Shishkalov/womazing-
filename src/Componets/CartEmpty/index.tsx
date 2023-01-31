import React from 'react'
import { Link } from 'react-router-dom'
import style from './CartEmpty.module.scss'
export const CartEmpty: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.breadcrumbs}>
                <h1>
                    Корзина пустая
                </h1>
                <p>Главная —  <span>Корзина</span></p>
            </div>
            <p>
                Вы не добавили ещё товар.<br />
                Для того, чтобы добавить товар, перейдити на  страницу
                <Link className={style.link} to={"/shop"}>
                    Магазина
                </Link>.

            </p>
            <Link to='/womazing ' className="">
                <button className={style.btnGhost}>Вернуться на главную</button>
            </Link>
        </div>
    )
}