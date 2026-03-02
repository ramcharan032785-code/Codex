# E-Commerce Application

This repository contains a simple e-commerce application with a React frontend, a Spring Boot backend, and a MySQL database configuration.

## Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

The frontend expects the backend to run on `http://localhost:8080` and proxies `/api` requests via Vite.

## Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

Update the MySQL credentials in `backend/src/main/resources/application.properties` before running the backend.

## Database (MySQL)

Example database setup:

```sql
CREATE DATABASE ecom_db;
CREATE USER 'ecom_user'@'localhost' IDENTIFIED BY 'change_me';
GRANT ALL PRIVILEGES ON ecom_db.* TO 'ecom_user'@'localhost';
FLUSH PRIVILEGES;
```
