import React from 'react'
import { useSelector, } from 'react-redux'
import { Categories, Products, Skeleton, Pagination } from '../../Componets'
import { selectFilter, setCurrentPage, setFilters } from '../../redux/Slices/Filter'
import qs from 'qs'
import style from './shop.module.scss'
import { selectProductData, fetchItems, itemsParams, ItemType, } from '../../redux/Slices/ProductsSlice';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'
export const Shop = () => {

  const { categoryId, currentPage } = useSelector(selectFilter);
  const { items, status } = useSelector((selectProductData));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearche = React.useRef(false);
  const isMounted = React.useRef(false);
  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }
  const getItems = async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    dispatch(
      fetchItems(
        {
          category, currentPage: String(currentPage),
        }
      ));


  };
  React.useEffect(() => {
    if (window.location.search) {
      const params = (qs.parse(window.location.search.substring(1)) as unknown) as itemsParams;
      dispatch(setFilters({
        categoryId: (params.category),
        currentPage: Number(params.currentPage),
      }))
      isSearche.current = true;
    }
  }, []);

  React.useEffect(() => {
    getItems();
    isSearche.current = false;
  }, [categoryId, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
        currentPage
      });
      navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [categoryId, currentPage]);

  const skeleton = [... new Array(6)]?.map((_, index) =>
    <div key={index} className={style.item}> <Skeleton />  </div>)
  const product = items?.map((obj:ItemType) => (
    <Products key={obj.id} {...obj} />
  ))
  return (
    <>
      <div className={style.container}>
        <div className={style.breadcrumbs}>
          <h1>
            Магазин
          </h1>
          <p>Главная —  <span>Магазин</span></p>
        </div>

        <Categories />
        <div className={style.root}>
          <div className={style.itemWrap}>
            {status === 'error' ? (
              <div className={style.error}>
                <h2>Товар не отобразился</h2>
              </div>) :
              (status === 'loading' ? skeleton : product)}

          </div>
        </div>
        < Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </>
  )
}

