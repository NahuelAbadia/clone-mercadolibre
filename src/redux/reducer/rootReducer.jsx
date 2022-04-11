import { DETALLES, AGREGAR_PRODUCTOS, ELIMINAR_PRODUCTOS, LOADING, SEARCH_PRODUCT } from "../actions/action"

const initialState = {
  productDetail: {},
  carrito: [],
  loading: false,
  searchProduct: []
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case DETALLES:
      return {
        ...state,
        productDetail: action.payload
      }
    case AGREGAR_PRODUCTOS:
      return {
        ...state,
        carrito: state.carrito.concat(action.payload)
      }
    case ELIMINAR_PRODUCTOS:
      return {
        ...state,
        carrito: state.carrito.filter(item => item.id !== action.payload),
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: true
      }

    case SEARCH_PRODUCT:
      return {
        ...state,
        searchProduct: action.payload,
        loading: false,
      }
    default:
      return state
  }
}