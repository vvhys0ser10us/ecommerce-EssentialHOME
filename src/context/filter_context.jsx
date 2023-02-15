import { createContext, useContext, useReducer, useEffect } from 'react'
import filter_reducer from '../reducers/filter_reducer'
import { LOAD_PRODUCTS } from '../actions'
import { useProductsContext } from './products_context'

const FilterContext = createContext()

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
}

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)

  const { products } = useProductsContext()

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products })
  }, [products])

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () => {
  return useContext(FilterContext)
}

export { FilterProvider, useFilterContext }