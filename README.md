# 🚀 Spring Boot + React CRUD Application

A full-stack web application for product management built with Spring Boot (backend) and React (frontend).

## 📋 Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Full CRUD Operations**: Create, Read, Update, Delete products
- **RESTful API**: Spring Boot with Spring Data REST
- **React Frontend**: Modern UI with Vite build tool and Bootstrap styling
- **Database Integration**: MySQL with Flyway migrations
- **Auto-generated Database**: Flyway automatically creates tables and sample data

## 🛠️ Technologies Used

### Backend
- **Spring Boot 3.2.11** - Java framework for building the REST API
- **Spring Data JPA** - Data access layer with JPA/Hibernate
- **Spring Data REST** - Automatic REST endpoint generation
- **MySQL** - Relational database for data persistence
- **Flyway** - Database migration tool
- **Maven** - Dependency management and build tool

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **JavaScript** - Modern JavaScript features
- **Bootstrap** - CSS framework for responsive design and styling

## 📁 Project Structure

```
CRUD Fullstack/
├── backend-products/          # Spring Boot backend
│   ├── src/main/java/
│   │   └── com/alfonsovidrio/springboot/backend/backend_products/
│   │       ├── BackendProductsApplication.java
│   │       ├── DataRestConfig.java
│   │       ├── entities/
│   │       │   └── Product.java
│   │       └── repositories/
│   │           └── ProductRepository.java
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── db/migration/
│   │       └── V1__Initial_setup.sql
│   └── pom.xml
├── react-app/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductForm.jsx
│   │   │   ├── ProductTable.jsx
│   │   │   └── ProductDetails.jsx
│   │   ├── services/
│   │   │   └── ProductService.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Java 17** or higher
- **Node.js 18** or higher
- **MySQL 8.0** or higher
- **Maven 3.6** or higher
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/AlfonsoVidrio/springboot-react-product-crud.git
cd springboot-react-product-crud
```

### 2. Database Setup

**Important:** You must create the database before running the application. Flyway will automatically create the tables and insert sample data.

1. Create a MySQL database named `db_backend_products`:
```sql
CREATE DATABASE db_backend_products;
```

2. Configure environment variables or update `backend-products/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/db_backend_products
spring.datasource.username=your_username
spring.datasource.password=your_password
```

**Note:** Flyway will automatically create the `products` table and insert sample data when you first run the application.

### 3. Backend Setup
```bash
cd backend-products
mvn clean install
```

### 4. Frontend Setup
```bash
cd react-app
npm install
```

## 🏃‍♂️ Running the Application

### Start the Backend (Spring Boot)
```bash
cd backend-products
mvn spring-boot:run
```
The backend will start on `http://localhost:8080`

### Start the Frontend (React)
```bash
cd react-app
npm run dev
```
The frontend will start on `http://localhost:5173`

## 📡 API Endpoints

The application uses Spring Data REST which automatically generates RESTful endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/{id}` | Get product by ID |
| POST | `/products` | Create new product |
| PUT | `/products/{id}` | Update product |
| DELETE | `/products/{id}` | Delete product |

### Example API Usage

**Get All Products:**
```bash
curl http://localhost:8080/products
```

**Create a Product:**
```bash
curl -X POST http://localhost:8080/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Product",
    "description": "Product description",
    "price": 299.99
  }'
```

## 🗄️ Database Schema

### Products Table
| Column | Type | Description |
|--------|------|-------------|
| id | BIGINT | Primary key (auto-increment) |
| name | VARCHAR(255) | Product name |
| description | TEXT | Product description |
| price | DECIMAL(10,2) | Product price |

### Sample Data

Flyway will automatically create the following sample products in the database:

- Laptop Dell XPS 13 - $1299.99
- iPhone 14 - $999.99
- Samsung Galaxy S23 - $849.99
- MacBook Pro 16 - $2499.99
- iPad Air - $599.99

## 📸 Screenshots

### Frontend Application
<img width="1920" height="868" alt="screencapture-localhost-5173-2025-07-18-03_42_14" src="https://github.com/user-attachments/assets/526a53f6-e9a3-44fb-86fb-378481cf72b2" />

