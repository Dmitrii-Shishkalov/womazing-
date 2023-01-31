import React from 'react'
import { useParams } from 'react-router-dom'
import style from './FullProduct.module.scss'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectSize, setSize } from '../../redux/Slices/cart';
import { addItem } from '../../redux/Slices/cart';
import { Breadcumbs, ImgPrLoader, Paramenters } from './Loader'
import { RootState, useAppDispatch } from '../../redux/store';
export const sizeList = ["S", "M", "L", "XL"];
export const FullProduct = () => {
    type productProps = {
        title: string,
        price: number,
        imageUrl: string
    }
    const [product, setProduct] = React.useState<productProps>()
    const { id } = useParams();

    // const [value,setValue] = React.useState(0);
    const size = useSelector(selectSize);
    const onClickSize = (i: number) => {
        dispatch(setSize(i));
    }
    const dispatch = useAppDispatch();
    const cartItem = useSelector((state: RootState) => state.cart.items.find((obj: any) => obj.id === id));
    const addedCount = cartItem ? cartItem.count : 0;
    const onClickAdd = () => {
        const item = {
            id,
            title: product!.title,
            price: product!.price,
            imageUrl: product!.imageUrl,
            size: sizeList[size],

        }
        dispatch(addItem(item)); 
    }
    React.useEffect(() => {

        async function fetchsPizza() {
            try {
                const { data } = await axios.get(`https://6395f0a8a68e43e418f60155.mockapi.io/fds/` + id);
                setProduct(data);
            } catch (error) {
                alert('Ошибка при получнемие пиццы');
            }
        }
        fetchsPizza()
    }, []);
    if (!product) {
        return (
            <>
                <div className={style.container}>
                    <div className={style.breadcrumbs}>
                        <Breadcumbs />
                    </div>
                    <div className={style.productWrap}>
                        <ImgPrLoader />
                        <div className={style.ProductParams}>\
                            <Paramenters />
                        </div>
                    </div>
                </div>
            </>)
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.breadcrumbs}>
                    <h1>
                        {product.title}
                    </h1>
                    <p>Главная — Магазин  — <span>{product.title}</span></p>
                </div>
                <div className={style.productWrap}>
                    <img src={product.imageUrl} alt="" />
                    <div className={style.ProductParams}>
                        <h2 className={style.price}>${product.price}</h2>
                        <h4>Выберите размер</h4>
                        <ul>
                            {sizeList.map((obj, i) => (
                                <li
                                    key={i}
                                    onClick={() => onClickSize(i)}
                                    className={Number(size) === i ? style.active : ''}>
                                    {obj}
                                </li>
                            ))}
                        </ul>
                        <div className={style.addCart}>
                            <p className={style.count}>{addedCount}</p>
                            <button onClick={onClickAdd}>Добавить в корзину</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
