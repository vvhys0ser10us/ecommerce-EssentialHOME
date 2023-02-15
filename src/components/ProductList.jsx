import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filtered_products, grid_view } = useFilterContext()

  if (filtered_products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (grid_view) {
    return <GridView products={filtered_products}></GridView>
  }

  return <ListView products={filtered_products}></ListView>
}

export default ProductList
