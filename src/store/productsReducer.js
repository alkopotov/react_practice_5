const defaultState = JSON.parse(localStorage.getItem('products'))  ??
 [
  {id: 1, title: 'Велосипед', count: 5},
  {id: 2, title: 'Самокат', count: 4},
  {id: 3, title: 'Гантели', count: 7},
  {id: 4, title: 'Ракетки', count: 1},
]

const INCR_PRODUCT = 'INCR_PRODUCT'
const DECR_PRODUCT = 'DECR_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'

export const productsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case INCR_PRODUCT:
      if (state.filter(elem => elem.id === action.payload)[0].count === 25){
        return state
      } 
      else {
        return state.map(elem => {
          if (elem.id !== action.payload) {
            return elem
          } else {
            return {id: elem.id, title: elem.title, count: elem.count + 1}
          }
        })
      }
    
    case DECR_PRODUCT:
      if (state.filter(elem => elem.id === action.payload)[0].count === 1) {
        return state.filter(elem => elem.id !== action.payload)
      } else {
        return state.map(elem => {
          if (elem.id !== action.payload) {
            return elem
          } else {
            return {id: elem.id, title: elem.title, count: elem.count - 1}
          }
        })
      }

    case ADD_PRODUCT:
      return [...state, action.payload]
    default:
      return state
  }
}

export const incrProduct = (payload) => ({type: INCR_PRODUCT, payload})
export const decrProduct = (payload) => ({type: DECR_PRODUCT, payload})
export const addProduct = (payload) => ({type: ADD_PRODUCT, payload})