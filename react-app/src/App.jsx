import { useEffect, useState } from 'react'
import { create, findAll, remove, update } from './services/ProductService'
import { ProductTable } from './components/ProductTable'
import PropTypes from 'prop-types'
import { ProductForm } from './components/ProductForm'

export const App = () => {
  const [products, setProducts] = useState([])
  const [productSelected, setProductSelected] = useState({
    id: 0,
    name: '',
    description: '',
    price: ''
  })

  const getProducts =  async () => {
    const result = await findAll()
    setProducts(result._embedded.products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const handlerAddProduct = async (product) => {
    if (product.id > 0) {
      const response = await update(product)
      setProducts(products.map(prod => {
        if (prod.id == response.id) {
          return { ...response }
        } else {
          return prod;
        }
      }))
    } else {
      const response = await create(product)
      setProducts([...products, {...response  }])
    }
  }

  const handlerRemoveProduct = (id) => {
    remove(id)
    setProducts(products.filter(product => product.id != id))
  }

  const handlerProductSelected = (product) => {
    setProductSelected({ ...product })
  }
  return (
    <div className="container-fluid py-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="text-center mb-4">
            <h1 className="display-4 text-primary">
              <i className="bi bi-shop"></i> Product Management System
            </h1>
          </div>
        </div>
      </div>
      
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <ProductForm 
            handlerAddProduct={handlerAddProduct} 
            productSelected={productSelected} 
          />
        </div>
        
        <div className="col-lg-8 col-md-6">
          {products.length > 0 ? (
            <ProductTable 
              products={products} 
              handlerRemoveProduct={handlerRemoveProduct} 
              handlerProductSelected={handlerProductSelected} 
            />
          ) : (
            <div className="card">
              <div className="card-body text-center py-5">
                <i className="bi bi-inbox display-1 text-muted"></i>
                <h4 className="mt-3">No products available</h4>
                <p className="text-muted">Start by creating your first product!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired
}