import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { addProduct } from '../store/productsReducer'
import { useEffect } from 'react'


function ProductList() {


  const products = useSelector(store => store.products)
  const dispatch = useDispatch()

  useEffect (() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  return (
    <div className='wrapper'>
      <h1>Ваша корзина</h1>
      {products.map(elem => <ProductItem key={elem.id} product={elem}/>)}
      <button
        className='add_button'
        onClick={() => dispatch(addProduct({id: Date.now(), title: prompt('Введите товар'), count: 1}))}
      >Добавить товар</button>
    </div>
  )
}

export default ProductList

