-- Create products table
CREATE TABLE products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2)
);

-- Insert some sample data
INSERT INTO products (name, description, price) VALUES
('Laptop Dell XPS 13', 'Ultrabook con pantalla de 13 pulgadas, procesador Intel i7', 1299.99),
('iPhone 14', 'Smartphone Apple con cámara de 48MP y chip A15 Bionic', 999.99),
('Samsung Galaxy S23', 'Smartphone Android con pantalla AMOLED de 6.1 pulgadas', 849.99),
('MacBook Pro 16', 'Laptop profesional con chip M2 Pro y 16GB de RAM', 2499.99),
('iPad Air', 'Tablet con pantalla de 10.9 pulgadas y chip M1', 599.99);