import { useDispatch } from "react-redux"
import { decrProduct, incrProduct } from "../store/productsReducer"

function ProductItem({product}) {
  const dispatch = useDispatch()

  return (
    <div className="product_item">
      <h2>{product.title}</h2>
      <div className="counter">
        <button className='count_button' onClick={() => dispatch(decrProduct(product.id))}>-</button>
        <h3>{product.count}</h3>
        <button className='count_button' onClick={() => dispatch(incrProduct(product.id))}>+</button>
      </div>
    </div>
  )
}

export default ProductItem