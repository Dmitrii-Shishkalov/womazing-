import React from 'react'
import style from './Contact.module.scss'
const adreas = [
    { title: "Телефон", text: "+38 (044) 823-54-12" },
    { title: "E-mail", text: "info@sitename.com" },
    { title: "Адрес", text: "г. Москва, 3-я улица Строителей, 25" },]
export const Contact: React.FC = () => {

    return (
        <>
            <div className={style.container}>
                <div className={style.breadcrumbs}>
                    <h1>
                        Контакты
                    </h1>
                    <p>Главная — <span>Контакты</span></p>
                </div>
                <section className={style.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2249.0538454423026!2d37.52989311577311!3d55.68805160445179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1673351168559!5m2!1sru!2sru"  ></iframe>
                </section>
                <section className={style.contact}>
                    {adreas.map((obj, i) =>
                        <div key={i}>
                            <p>
                                {obj.title}
                            </p>
                            <p>
                                {obj.text}
                            </p>
                        </div>
                    )}
                </section>
                <section className={style.writeblock}>
                    <h3>
                        Напишите нам
                    </h3>
                    <div>
                        <input type="text" placeholder='Имя' />
                        <input type="text" placeholder='E-mail' />
                        <input type="text" placeholder='Телефон' />
                        <textarea placeholder='Сообщение'></textarea>
                        <button>Отправить</button>
                    </div>
                </section>
            </div>
        </>
    )
}
