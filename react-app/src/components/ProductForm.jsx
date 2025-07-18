import { useEffect, useState } from "react"

const initialFormState = {
    id: 0,
    name: '',
    description: '',
    price: ''
}

export const ProductForm = ({ productSelected, handlerAddProduct }) => {

    const [form, setForm] = useState(initialFormState)
    const { id, name, description, price } = form

    useEffect(() => {
        setForm(productSelected)
    },[productSelected])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name || !description || !price) {
            alert("All fields are required")
            return
        }
        handlerAddProduct(form)
        setForm(initialFormState)
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    return (
        <div className="card">
            <div className="card-header">
                <h4>{id > 0 ? 'Update Product' : 'Create Product'}</h4>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter product name"
                            className="form-control"
                            name="name"
                            value={name}
                            required
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <textarea
                            id="description"
                            placeholder="Enter product description"
                            className="form-control"
                            name="description"
                            value={description}
                            required
                            rows="3"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                                id="price"
                                type="number"
                                placeholder="0.00"
                                className="form-control"
                                name="price"
                                value={price}
                                required
                                min="0"
                                step="0.01"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className={`btn ${id > 0 ? 'btn-warning' : 'btn-primary'}`}>
                            {id > 0 ? 'Update Product' : 'Create Product'}
                        </button>
                        {id > 0 && (
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={() => setForm(initialFormState)}
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
