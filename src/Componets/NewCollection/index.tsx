import style from './NewCollection.module.scss'
import { item1, item2, item3 } from './referense'
import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../Products'
import { useSelector, } from 'react-redux';
import { fetchItems, ItemType, selectProductData } from '../../redux/Slices/ProductsSlice';
import Skeleton from '../Products/Skeleton'
import { selectFilter } from '../../redux/Slices/Filter'
import { useAppDispatch } from '../../redux/store'

export const NewCollection: React.FC = () => {
    const { items, status } = useSelector(selectProductData)
    const { categoryId, currentPage } = useSelector(selectFilter);

    const dispatch = useAppDispatch();
    const getItems = async () => {

        const category = categoryId > 0 ? `category=${categoryId}` : '';

        dispatch(
            fetchItems(
                { category, currentPage: String(currentPage) }
            ));


    };

    const skeleton = [... new Array(6)]?.map((_, index) =>
        <div key={index} className={style.item}> <Skeleton />  </div>)

    const newColl = items?.map((obj: ItemType) => (
        <Products key={obj.id} {...obj} />))
    React.useEffect(() => {
        getItems();
    }, [categoryId, currentPage]);
    return (
        <section className={style.root}>
            <h2>
                Новая коллекция
            </h2>
            <div className={style.itemWrap}>
                {status === 'error' ? (
                    <div className={style.error}>
                        <h2>Товар не отобразился</h2>
                    </div>) : (status === 'loading' ? skeleton : newColl)}
            </div>

            <Link to={"/shop"}><button className={style.btnGhost}>Открыть магазин</button></Link>
        </section>
    )
}
