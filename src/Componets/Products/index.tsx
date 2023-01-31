import React from 'react'
import { Link } from 'react-router-dom'
import { ItemType } from '../../redux/Slices/ProductsSlice';
import { useAppDispatch } from '../../redux/store';
import style from './Product.module.scss'
export const Products = (obj: ItemType) => {
    const dispatch = useAppDispatch();
    return (
        <div className={style.wrap}>
            <div className={style.item}>
                <Link to={`/product/${obj.id}`}><img src={obj.imageUrl} alt="" /></Link>
                <h3>
                    {obj.title}
                </h3>
                <p>
                    {obj.price} $
                </p>

            </div>
        </div>
    )
}
