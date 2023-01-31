import React from 'react'
import style from './footer.module.scss'
import { logo, twitter, instagramm, facebook, visa } from './referense'
import { MenuList } from '../../utils/MenuList'
import { Link } from 'react-router-dom';
const shopList = [
    "Пальто",
    " Свитшоты",
    "Кардиганы",
    "Толстовки"
]
export const Footer = () => {
    return (
        <section className={style.footer}>
            <div className={style.container}>
                <div className={style.row}>
                    <Link to={'/'}>
                        <img src={logo} alt="" />
                    </Link>
                    <MenuList />
                    <p> +38 (044) 823-54-12 </p>
                </div>

                <div className={style.rowDown}>
                    <p>© Все права защищены
                        Политика конфиденциальности
                        Публичная оферта</p>
                    {/* <ul>
                        {shopList.map((shopname, i) => (
                            <li key={shopname}>{shopname}</li>
                        ))}

                    </ul> */}
                    <div className={style.socList}>
                        <img src={instagramm} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </div>

                </div>

            </div>
        </section >
    )
}
