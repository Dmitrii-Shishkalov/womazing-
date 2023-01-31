import React from 'react'
import style from './Brands.module.scss'
import { brandFirst, brandSecond } from './reference'
import { Link } from 'react-router-dom'
import { arrayFirst, arraySecond } from './array'
export const Brands: React.FC = () => {
    return (
        <div className={style.root}>
            <div className={style.container}>
                <div className={style.breadcrumbs}>
                    <h1>
                        О бренде
                    </h1>
                    <p>Главная —  <span>О бренде</span></p>
                </div>
                {arrayFirst.map((obj, i) =>
                    <section key={i} className={style.item}>
                        <img className={style.firstImage} src={brandFirst} alt="" />
                        <div>
                            <h3>
                                {obj.title}
                            </h3>
                            <p>
                                {obj.desc1}
                            </p>
                            <p>
                                {obj.desc2}
                            </p>
                        </div>
                    </section>
                )}

                {arraySecond.map((obj, i) =>
                    <section key={i} className={style.item}>
                        <div>
                            <h3>
                                {obj.title}
                            </h3>
                            <p>
                                {obj.desc1}
                            </p>
                            <p>
                                {obj.desc2}
                            </p>
                        </div>
                        <img className={style.secondImage} src={brandSecond} alt="" />
                    </section>
                )}
                <Link to={'/shop'}>
                    <button>Перейти в магазин</button>
                </Link>
            </div>
        </div >
    )
}
