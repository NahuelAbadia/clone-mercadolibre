import axios from "axios"

export const DETALLES = "DETALLES"
export const AGREGAR_PRODUCTOS = "AGREGAR_PRODUCTOS"
export const ELIMINAR_PRODUCTOS = "ELIMINAR_PRODUCTOS"
export const COMPRAR_PRODUCTOS = "COMPRAR_PRODUCTOS"
export const LOADING = "LOADING"
export const SEARCH_PRODUCT = "SEARCH_PRODUCT"

export function verDetalles(payload) {
  return {
    type: DETALLES,
    payload
  }
}

export function agregarProductos(payload) {
  return {
    type: AGREGAR_PRODUCTOS,
    payload
  }
}

export function eliminarProductos(payload) {
  return {
    type: ELIMINAR_PRODUCTOS,
    payload
  }
}

export function loading() {
  return {
    type: LOADING,
  }
}

export function searchProduct(title) {
  return async function (dispatch) {
    try {
      const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${title}`
      const result = await axios.get(URL)
      console.log(result.data)

      return dispatch({
        type: SEARCH_PRODUCT,
        payload: result.data
      })

    } catch (error) {
      console.log(error);
    }
  }
}