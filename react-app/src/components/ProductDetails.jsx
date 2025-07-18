import PropTypes from "prop-types"

export const ProductDetails = ({ handlerProductSelected, handlerRemoveProduct, product = {} }) => {
    return (
        <tr>
            <td className="fw-bold">{product.name}</td>
            <td className="text-muted">{product.description}</td>
            <td className="text-success fw-bold">${parseFloat(product.price).toFixed(2)}</td>
            <td>
                <div className="btn-group" role="group">
                    <button 
                        className="btn btn-outline-primary btn-sm" 
                        onClick={() => handlerProductSelected(product)}
                        title="Edit product"
                    >
                        <i className="bi bi-pencil-square"></i> Edit
                    </button>
                    <button 
                        className="btn btn-outline-danger btn-sm" 
                        onClick={() => handlerRemoveProduct(product.id)}
                        title="Delete product"
                    >
                        <i className="bi bi-trash"></i> Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}
