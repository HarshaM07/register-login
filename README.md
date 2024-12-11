# User Registration and Login System

## Overview

This project is a **User Registration and Login System** built using a backend framework to handle user authentication securely. It provides functionality for users to register, log in, and manage their session. The system uses secure password hashing, JWT-based authentication, and user data validation.

## Features

- User Registration:
  - Create a new account with name, email, and password.
  - Validates user input (e.g., strong password, valid email).
- User Login:
  - Authenticate users with email and password.
  - Issues a JSON Web Token (JWT) for session management.
- Secure Password Storage:
  - Passwords are hashed using a secure algorithm (e.g., bcrypt).
- Logout:
  - Users can log out by clearing their JWT token.
- Middleware:
  - Protect routes with authentication middleware.
- Error Handling:
  - Handles invalid input, authentication errors, and server issues.

## Frontend (React):
User Registration: Form to input name, email, and password.
User Login: Form to authenticate users with email and password.
Session Management: JWT token is stored in localStorage to manage sessions.
Protected Routes: Access to protected pages is allowed only with a valid JWT token.
Error Handling: Error messages are shown for invalid inputs and login failures.

## Technologies Used

- **Backend Framework**: Node.js (Express.js) 
- **Database**:  MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcrypt


## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshaM07/register-login.git
