import PropTypes from "prop-types"
import { ProductDetails } from "./ProductDetails"

export const ProductTable = ({ handlerProductSelected, handlerRemoveProduct, products = [] }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Products ({products.length})</h4>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive">
                    <table className="table table-hover table-striped mb-0">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) =>
                                <ProductDetails 
                                    handlerProductSelected={handlerProductSelected} 
                                    handlerRemoveProduct={handlerRemoveProduct} 
                                    key={product.id} 
                                    product={product} 
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

ProductTable.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}