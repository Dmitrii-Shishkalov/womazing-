import React from 'react'
import { NewCollection, } from '../../Componets'
import style from './Home.module.scss'
import { Link } from 'react-router-dom'
import { offerImg, important, dreams } from './array'
import { DreamSlide } from './DreamSlide'
export const Home: React.FC = () => {

    return (
        <>
            <div className={style.container}>
                <div className={style.offer}>
                    {offerImg.map((obj: any,) =>
                        <>
                            <div className={style.offer__textWrap}>
                                <h1 key={obj.title}>
                                    {obj.title}
                                </h1>
                                <p key={obj.desc}>
                                    {obj.desc}
                                </p>
                                <Link to={"/shop"}>
                                    <button>Открыть магазин</button>
                                </Link>
                            </div>

                            <div className={style.offer__imgWrap}>
                                <img key={obj.imgCent} src={obj.imgCent} alt="" />
                                <img key={obj.imgRight} className={style.imgRight} src={obj.imgRight} alt="" />
                                <img key={obj.imgLeft} className={style.imgLeft} src={obj.imgLeft} alt="" />

                            </div>
                        </>)}
                </div>
                <NewCollection />
                <section className={style.important}>
                    <h2>
                        Что для нас важно
                    </h2>
                    <div className={style.wrap}>
                        {important.map((obj, i) =>
                            <div key={i} className={style.itemWrap}>
                                <div className={style.item}>
                                    <img key={obj.img} src={obj.img} alt="" />
                                    <h3 key={obj.title}>{obj.title}</h3>
                                    <p key={obj.desc}>{obj.desc}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <section className={style.drems}>
                    <h2>
                        Команда мечты Womazing
                    </h2>

                    <div className={style.wrap}>
                        <DreamSlide />
                        {dreams.map((obj, i) =>
                            <>
                                <div key={i} className={style.text} >
                                    <h3 key={obj.title}>
                                        {obj.title}
                                    </h3>
                                    <p key={obj.desc1}>
                                        {obj.desc1}
                                    </p>
                                    <p key={obj.desc2}>
                                        {obj.desc2}
                                    </p>
                                    <Link to={"/brands"} >
                                        Подробнее о бренде
                                    </Link>

                                </div>
                            </>
                        )}
                    </div>
                </section>
            </div >
        </>
    )
}  
