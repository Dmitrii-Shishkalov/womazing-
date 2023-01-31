import React from 'react'
import { useSelector, } from 'react-redux';
import { selectCategory, setCategoriesID } from '../../redux/Slices/Filter';
import { useAppDispatch } from '../../redux/store';
import styles from './categories.module.scss'
const categories = ['Все', 'Футболки', 'Свитшоты', 'Купальники', 'Пальто']

export const Categories = () => {
    const dispatch = useAppDispatch();

    const value = useSelector(selectCategory);
    const onClickCategory = (i:number) => {
        dispatch(setCategoriesID(i));
    }
    return (

        <div className={styles.root}>
            <ul>
                {categories.map((categoriesName, i) => (
                    <li
                        key={i}
                        onClick={() => onClickCategory(i)}
                        className={Number(value) === i ? styles.active : ''}>
                        {categoriesName}
                    </li>)
                )}
            </ul>
        </div>
    )
}
