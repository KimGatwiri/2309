# JavaScript and APIs

JavaScript is widely used for building dynamic web applications, often interacting with **APIs (Application Programming Interfaces)** to fetch, send, and manipulate data. APIs act as bridges between different software systems, allowing them to communicate.

---

## 1. Introduction to HTTP (HyperText Transfer Protocol)

HTTP is the foundation of data communication on the web, defining how requests and responses are structured between clients (browsers) and servers.

### Key Concepts:
- **Client-Server Model**: The client (browser or application) sends requests, and the server responds with data or resources.
- **Stateless Protocol**: Each HTTP request is independent; the server doesn’t retain session data between requests.
- **Request-Response Cycle**:
  - Client sends an **HTTP Request** (e.g., fetching data from an API).
  - Server processes it and returns an **HTTP Response** (e.g., JSON data).
  
### HTTP Methods (Verbs):
| Method  | Description |
|---------|------------|
| **GET** | Retrieve data from a server (read-only). |
| **POST** | Send data to the server to create a new resource. |
| **PUT** | Update or replace an existing resource. |
| **PATCH** | Partially update an existing resource. |
| **DELETE** | Remove a resource from the server. |

### HTTP Status Codes:
- **2xx (Success)** → `200 OK`, `201 Created`
- **3xx (Redirection)** → `301 Moved Permanently`, `304 Not Modified`
- **4xx (Client Errors)** → `400 Bad Request`, `401 Unauthorized`, `404 Not Found`
- **5xx (Server Errors)** → `500 Internal Server Error`, `503 Service Unavailable`

### Headers in HTTP Requests & Responses:
- **Request Headers**: Provide metadata (e.g., `Authorization`, `Content-Type`)
- **Response Headers**: Include info like caching rules and content type.

---

## 2. Introduction to REST (Representational State Transfer)

**REST** is an architectural style that structures how web services should communicate. It defines a set of principles for building APIs that interact over HTTP.

### REST Principles:
1. **Client-Server Separation**: The frontend (client) and backend (server) should be independent.
2. **Stateless Communication**: No client information is stored between requests.
3. **Uniform Interface**:
   - Use standard **HTTP methods** (`GET`, `POST`, etc.).
   - Use **resource-based URLs** (`/users`, `/products`).
   - Follow consistent data formats (e.g., JSON, XML).
4. **Layered System**: Clients don’t need to know how the backend is structured.
5. **Cacheability**: Responses can be cached to improve performance.

### RESTful URL Structure:
A well-designed REST API should use **clear and meaningful URLs**:
```plaintext
GET     /users        → Fetch all users
GET     /users/5      → Fetch a specific user (ID = 5)
POST    /users        → Create a new user
PUT     /users/5      → Update user with ID = 5
DELETE  /users/5      → Delete user with ID = 5
```

---

## 3. RESTful APIs and JavaScript

A **RESTful API** is a web service that follows REST principles and allows applications to interact with it over HTTP.

### Interacting with APIs in JavaScript
JavaScript provides multiple ways to make API calls:

### 1. Using Fetch API (Modern & Recommended)
```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log(data))   // Handle data
  .catch(error => console.error('Error:', error));
```

### 2. Using Async/Await (More Readable)
```javascript
async function fetchUsers() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
fetchUsers();
```

### 3. Using Axios (Third-Party Library)
```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
```

### Sending Data via API
```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the content',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

### Handling API Authentication
Many APIs require authentication:
- **API Keys**: `Authorization: Bearer YOUR_API_KEY`
- **OAuth**: Tokens managed via OAuth 2.0
- **Basic Auth**: Username & password in headers (`Authorization: Basic encoded_credentials`)

---

## Key Takeaways
✅ **HTTP** is the foundation of web communication.  
✅ **REST APIs** use structured URLs and HTTP methods.  
✅ **JavaScript** provides multiple ways to interact with APIs (`fetch`, `axios`).  
✅ **RESTful APIs** follow principles like statelessness, cacheability, and resource-based URLs.  

Let me know if you need further breakdowns! 🚀
