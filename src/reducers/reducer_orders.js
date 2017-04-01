import {
  REFILL_HIS_ORDERS, ADD_HIS_ORDERS, DELETE_HIS_ORDERS, DELETE_HIS__ORDERS_NEXT_LINK,
  ASKING_CURRENT_ORDER, ASK_CURRENT_ORDER_FAILED, ADD_CURRENT_ORDER
} from '../actions'

const ordersReducer = (state = {
  historicalsOrders: [],
  historicalsOrdersNextLink: "",
  isAskingCurrentOrder: false,
  currentOrder: {},
  currentOrderFailedREason: ""
}, action) => {
  switch (action.type) {
    case DELETE_HIS__ORDERS_NEXT_LINK:
      return {
        ...state,
        historicalsOrdersNextLink: ""
      }
    case REFILL_HIS_ORDERS:
      return {
        ...state,
        historicalsOrders: action.orders,
        historicalsOrdersNextLink: (action.next)? action.next : ""
      }
    case ADD_HIS_ORDERS:
      return {
        ...state,
        historicalsOrders: state.historicalsOrders.concat(action.orders),
        historicalsOrdersNextLink: (action.next)? action.next : ""
      }
    case DELETE_HIS_ORDERS:
      return {
        ...state,
        historicalsOrders: [],
        historicalsOrdersNextLink: ""
      }
    case ASKING_CURRENT_ORDER:
      return {
        ...state,
        isAskingCurrentOrder: true,
        currentOrder: {},
        currentOrderFailedREason: ''
      }
    case ASK_CURRENT_ORDER_FAILED:
      return {
        ...state,
        isAskingCurrentOrder: false,
        currentOrder: {},
        currentOrderFailedREason: action.reason
      }
    case ADD_CURRENT_ORDER:
      return {
        ...state,
        isAskingCurrentOrder: false,
        currentOrder: action.order,
        currentOrderFailedREason: ''
      }
    default:
      return state
  }
}

export default ordersReducer