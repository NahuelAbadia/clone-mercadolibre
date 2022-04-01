import {DETALLES} from "../actions/action"

const initialState = {
  productos: [],
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case DETALLES:
      return{
        ...state,
        productos: action.payload
      }

    default:
      return state
  }
}