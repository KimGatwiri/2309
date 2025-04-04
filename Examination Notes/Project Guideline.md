# PERN Stack Blogging Website

A full-stack blogging platform built using the **PERN stack**: PostgreSQL, Express.js, React.js, and Node.js.

---

##  What is the PERN Stack?

The PERN stack is a powerful combination of tools for building full-stack web applications:

- **P** – PostgreSQL: The database that stores all your data (users, posts, comments)
- **E** – Express.js: A backend web framework that runs on Node.js
- **R** – React.js: A frontend library for building user interfaces
- **N** – Node.js: A JavaScript runtime environment for executing server-side code

---

##  Project Overview

This is a **blogging website** where users can:
- Sign up and log in
- Write blog posts
- View posts written by others
- Edit or delete their own posts
- (Optional) Comment on blog posts

---

##  Database Design (PostgreSQL)

Using **Prisma** (or Sequelize), we define our database structure.

###  Tables:

#### 1. `Users`
- `id` (Primary Key)
- `username`
- `email`
- `password`

#### 2. `Posts`
- `id` (Primary Key)
- `title`
- `content`
- `author_id` (Foreign key referencing `Users`)
- `created_at`

#### 3. `Comments` (Optional)
- `id` (Primary Key)
- `text`
- `post_id` (Foreign key referencing `Posts`)
- `user_id` (Foreign key referencing `Users`)
- `created_at`
 **Relationships:**
- A user can write many posts
- A post can have many comments
- A comment is made by a user on a post

---

## Backend – Express + Node.js

Handles all logic for authentication, creating posts, fetching data, etc.

###  Folder Structure:
/server ├── /controllers # Business logic ├── /routes # All API endpoints ├── /models # Database models ├── /middlewares # Auth middleware (JWT) └── server.js # Entry point

###  Authentication (JWT)
- Users receive a **JWT** token when they login
- Token is stored in localStorage/cookies
- Protected routes require this token in request headers

### 🔧 API Routes

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | `/auth/register`     | Register a new user      |
| POST   | `/auth/login`        | Login and receive token  |
| GET    | `/posts`             | Retrieve all blog posts  |
| GET    | `/posts/:id`         | Get a specific post      |
| POST   | `/posts`             | Create a new blog post   |
| PUT    | `/posts/:id`         | Edit a blog post         |
| DELETE | `/posts/:id`         | Delete a blog post       |

---

## Frontend – React.js

###  Key Pages / Components

1. **Home Page**
   - Lists all blog posts
   - Each post links to its full page

2. **Single Post Page**
   - Shows the full blog content
   - (Optional) Comment section

3. **Login/Register Pages**
   - Allows users to sign in or create an account

4. **Dashboard**
   - User's personal blog posts
   - Buttons to add, edit, delete posts

5. **Navbar**
   - Navigation links (Home, Dashboard, Login/Logout)

### 📡 Frontend → Backend Communication

Uses `axios` or `fetch` to call backend endpoints:
- `GET /posts` – Get all blogs
- `POST /posts` – Create blog (token required)
- `POST /auth/login` – Login and get token
- Token is included in request headers like:
```js
headers: {
  Authorization: `Bearer ${token}`
}
## ✅ Feature Checklist

- [x] User Registration & Login  
- [x] JWT Authentication  
- [x] Create / Read / Edit / Delete Posts  
- [x] PostgreSQL Database  
- [x] Frontend/Backend Integration  
- [x] Token-Based Protected Routes  
- [x] Clean React Interface  

---

## 👨‍💻 Built With

- **React.js** (Frontend)  
- **Express.js + Node.js** (Backend)  
- **PostgreSQL** (Database)  
- **Prisma ORM** (Optional ORM for database modeling)  
- **JWT** (Authentication system)  
- **Tailwind CSS or Bootstrap** (Styling and responsive UI)

---

## 🧠 Learning Outcomes

Students using this project will learn:

- ✅ How full-stack applications are structured  
- ✅ API design and proper use of HTTP methods  
- ✅ Using React with state, props, and component architecture  
- ✅ How to protect routes and resources using JWT  
- ✅ Connecting the frontend and backend using RESTful APIs  
- ✅ Modeling and managing relational data using Prisma or raw SQL

