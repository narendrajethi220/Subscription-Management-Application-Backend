# Subscription Management System

## 🤖 Introduction

The Subscription Management System API is a production-ready backend service that allows users to manage all their subscriptions in one place. It includes user authentication, database connectivity, and advanced features like automated email reminders and security mechanisms.

This project follows best practices in API architecture, ensuring scalability and smooth integration with a frontend application.


## ⚙️ Tech Stack

Node.js

Express.js

MongoDB (Mongoose for ORM)

BcryptJs (For Hashing Password)

JWT Authentication

Arcjet (Advanced Rate Limiting & Bot Protection)

Upstash (Automated Workflows & Email Reminders)

Nodemailer (For sending email notifications)


## 🔋 Features
✅ Advanced Rate Limiting & Bot Protection: Secured using Arcjet for enhanced security.

✅ Database Modeling: Well-structured MongoDB models and relationships using Mongoose.

✅ JWT Authentication: Secure authentication and authorization for users.

✅ Global Error Handling: Middleware-based input validation and structured error management.

✅ Logging Mechanisms: Built-in logging for better debugging and monitoring.

✅ Email Reminders: Automated email notifications using Upstash.

✅ Clean & Modular Code: Follows best practices for scalability and maintainability.


## 🕸️ Project Structure

### 📂 Config 

Arcjet Security (Advanced Rate Limiting & Bot Protection)

Environment Variables (Secure application secrets and configurations)

Nodemailer (Handles email notifications for subscription reminders)

Upstash (Manages automated workflows and background jobs)

### 📂 Routes

Auth Routes (auth.routes.js): Handles user authentication (signup, login, logout, JWT verification).

User Routes (user.routes.js): User profile management and related operations.

Subscription Routes (subscription.routes.js): Handles subscription creation, modification, and retrieval.

Workflow Routes (workflow.routes.js): Manages automated workflows like email reminders.

### 📂 Controllers

Auth Controller (auth.controller.js): Handles user authentication logic.

Subscription Controller (subscription.controller.js): Manages subscription-related business logic.

User Controller (user.controller.js): Handles user management functions.

Workflow Controller (workflow.controller.js): Controls background job processing.


### 📂 Models

#### User Model (user.model.js)

   Stores user information including name, email, and password.

   Implements validation for email format and password length.

#### Subscription Model (subscription.model.js)

   Manages subscriptions with details such as name, price, frequency, and status.

   Auto-calculates renewal dates and updates expired subscriptions.


### 📂 Middleware

Error Handling (error.middleware.js): Centralized error handling mechanism.

Arcjet Security (arcjet.middleware.js): Implements rate limiting and bot protection.

Auth Middleware (auth.middleware.js): Ensures users are authenticated before accessing protected routes.


### 📂 Database

MongoDB Connection (database/index.js): Establishes a connection with the MongoDB database.

### 📂 Utils

Email Templates (emailTemplates.js): Predefined email structures for notifications.

Send Emails (emailService.js): Utility function to send email reminders via Nodemailer.


🕸️ Snippets (Code to Copy)

Dummy JSON Data Example for Subscription
`{
  "name": "Netflix Premium Plan",
  "price": 15.99,
  "currency": "USD",
  "frequency": "monthly",
  "category": "Entertainment",
  "paymentMethod": "Credit Card",
  "startDate": "2025-04-01T00:00:00.000Z",
  "user": "65fabc1234def567890abcd9"
}`

## 🤸 Quick Start

Prerequisites

Ensure you have the following installed:

Git

Node.js

npm (Node Package Manager)

Cloning the Repository

`git@github.com:narendrajethi220/Subscription-Management-Application-Backend.git`

cd Subscription-Management-Application-Backend

### Installation

Install the project dependencies:

npm install

### Set Up Environment Variables

Create a .env.local file in the root of your project and add the following:


#### PORT

PORT=5500

SERVER_URL="http://localhost:5500"


#### ENVIRONMENT

NODE_ENV=development


#### DATABASE

DB_URI=


#### JWT AUTH

JWT_SECRET=

JWT_EXPIRES_IN="1d"


#### ARCJET

ARCJET_KEY=

ARCJET_ENV="development"


#### UPSTASH

QSTASH_URL=http://127.0.0.1:8080

QSTASH_TOKEN=


#### NODEMAILER

EMAIL_PASSWORD=

EMAIL_SERVICE=

EMAIL_USER=

#### Running the Project

npm start

#### Open `http://localhost:5500` in your browser or any HTTP client to test the API.

Developed with ❤️ by Narendra Singh Jethi.
