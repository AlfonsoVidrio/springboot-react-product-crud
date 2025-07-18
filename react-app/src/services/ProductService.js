import axios from 'axios'

const initProducts = [
    {
        id: 1,
        name: "Monitor Samsung",
        price: 300,
        description: "Monitor de 24 pulgadas"
    },
    {
        id: 2,
        name: "Teclado Logitech",
        price: 50,
        description: "Teclado mecánico retroiluminado"
    }
]

const BASE_URL = "http://localhost:8080/products";

export const listProducts = () => {
    return initProducts
}

export const findAll = async () => {
    try {
    const response = await axios.get(BASE_URL);
    return response.data;
    } catch (error) {
        console.error("Error fetching products:", error)
        return []
    }
}

export const create = async ({name, description, price}) => {
    try {
        const response = await axios.post(BASE_URL, {
        name,
        description,
        price
    })
    return response.data;
    } catch (error) {
        console.error("Error creating product:", error)
        return null
    }
}

export const update = async ({id, name, description, price}) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, {
        name,
        description,
        price
    })
    return response.data;
    } catch (error) {
        console.error("Error creating product:", error)
        return null
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.log("Error removing product:", error)
        return null
    }
} 