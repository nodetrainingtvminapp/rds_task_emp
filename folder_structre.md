# Event Management Platform Boilerplate Guide 📚

Welcome to the **Event Management Platform** project boilerplate! 🎉 This guide will walk you through the folder structure, explain what each part does, and show you how to use this structure effectively while developing backend services using **Express.js**, **PostgreSQL**, and eventually **Sequelize** ORM. Let's dive in! 🚀

## Folder Structure Overview 🗂️


> **Note:** The `src/` folder is a common convention for keeping all source code separate from configuration, build scripts, and other non-source files. This helps in organizing the project and making it easier to navigate.


```
event-management-platform/
│
├── src/                                # All source code lives here
│   ├── config/                         # Configuration files
│   │   └── db.js                       # Database connection setup
│   │
│   ├── controllers/                    # Controllers for handling request logic
│   │   ├── userController.js           # User-related controller logic
│   │   └── eventController.js          # Event-related controller logic
│   │
│   ├── services/                       # Business logic layer (Service Layer)
│   │   ├── userService.js              # User-related business logic
│   │   └── eventService.js             # Event-related business logic
│   │
│   ├── db/                             # Database-related logic
│   │   ├── queries/                    # Raw SQL queries are placed here
│   │   │   ├── userQueries.js          # SQL queries for user-related operations
│   │   │   └── eventQueries.js         # SQL queries for event-related operations
│   │   └── migrations/                 # Future Sequelize migrations will live here
│   │
│   ├── models/                         # Future Sequelize models will go here
│   │
│   ├── routes/                         # Define API routes
│   │   ├── userRoutes.js               # User routes definitions
│   │   └── eventRoutes.js              # Event routes definitions
│   │
│   ├── middlewares/                    # Custom middleware like authentication
│   │   └── authMiddleware.js           # JWT authentication middleware
│   │
│   ├── utils/                          # Utility/helper functions
│   │   └── jwtUtils.js                 # JWT helper functions
│   │
│   ├── app.js                          # Express app setup and middleware
│   └── server.js                       # Entry point for starting the server
│
├── .env                                # Environment variables
├── package.json                        # Dependencies and scripts
└── README.md                           # Project documentation
```

## Description of Each Folder 📁

### 1. `src/config/`
Contains configuration files such as the database connection setup. For example, **`db.js`** contains the configuration for connecting to PostgreSQL, making it easy to access the database across the project.

### 2. `src/controllers/`
This folder contains the **controllers**, which handle the incoming requests. Controllers are responsible for receiving input, processing requests, and sending responses.

Example:
- **`userController.js`** handles all user-related requests such as registering a new user or retrieving user information.

Controllers do not interact directly with the database. Instead, they call functions from the **service layer**.

### 3. `src/services/`
The **service layer** is where the core business logic is placed. It serves as an intermediary between the controllers and database queries, making your code modular and easier to update.

By using this layer, you ensure that when you later switch from raw SQL to an ORM like **Sequelize**, the **controllers** won’t need rewriting. You will only need to update the service functions.

### 4. `src/db/`
- **`queries/`**: This folder contains raw **SQL queries** used for interacting with the database initially.
- **`migrations/`**: This will store future **Sequelize migration** scripts when you move from raw SQL to ORM.

### 5. `src/models/`
Once you move to **Sequelize ORM**, you will define your models here. Models are abstractions of database tables, making it easier to interact with the database.

### 6. `src/routes/`
This folder defines the **API routes**. Each entity (e.g., user, event) has its own set of routes defined in separate files like **`userRoutes.js`** and **`eventRoutes.js`**.

Example:
- **`userRoutes.js`** defines the routes for user registration and login.

### 7. `src/middlewares/`
Contains middleware functions that execute during the request/response cycle. The **`authMiddleware.js`** is used to handle **JWT-based authentication**, ensuring protected routes are accessible only to authorized users.

### 8. `src/utils/`
Utility functions that are reused across the project. For example, **`jwtUtils.js`** contains helper functions for managing **JWT tokens**.

### 9. `src/app.js`
Sets up the **Express app**, integrates middleware, and defines the routes. This is the core setup of your server.

### 10. `src/server.js`
The entry point for starting the Express server. It imports **app.js** and listens on the specified port.

## Using This Boilerplate 🛠️

### Step-by-Step Development Process
1. **Install Dependencies**
   - Make sure to run `npm install` to install all dependencies listed in **`package.json`**.
2. **Environment Setup**
   - Create a **`.env`** file in the root directory to store environment variables such as `DATABASE_URL` and `PORT`. Example:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/event_management
   PORT=3000
   ```
3. **Database Connection**
   - The **`src/config/db.js`** file configures and exports the connection pool for **PostgreSQL**.
4. **Controller Logic**
   - Write functions to handle incoming HTTP requests. Example: **`userController.js`** handles user registration by calling the **service layer**.
5. **Service Layer Abstraction**
   - Implement **services** in the `src/services/` folder to contain the business logic. This layer helps maintain modularity and flexibility for switching from **raw SQL** to **ORM** later.
6. **Database Queries**
   - Implement **raw SQL queries** for creating users or events in **`src/db/queries/`**.
7. **API Routing**
   - Define your endpoints in **`src/routes/`** and link them to the respective controllers.
8. **Middleware Integration**
   - Use **JWT** for securing routes, and add middleware to routes as needed.

## Migrating to Sequelize ORM 🔄
When ready to migrate to **Sequelize**, follow these steps:
1. **Create Models** in `src/models/` for each table (e.g., `userModel.js` for the `users` table).
2. **Update Service Functions** to use the Sequelize models instead of raw SQL queries.
3. **Migrations**: Add migration scripts to `src/db/migrations/` to manage your database schema changes.

This approach ensures that you only need to modify the **service layer** instead of rewriting controllers, making the migration seamless. 🎉

## Key Benefits of This Structure 🌟
- **Modular and Extensible**: By separating the service, controller, and data layers, you can modify or extend each independently.
- **Future Proof**: Easily migrate from raw SQL to **Sequelize** without rewriting controllers.
- **Maintainable**: The clear separation of concerns makes it easy to navigate and understand the codebase.

## Ready to Get Started? 🚀
Feel free to explore the folders, start implementing features, and learn backend development in a structured, practical way. If you have any questions, don't hesitate to ask for guidance—collaboration is key to building something amazing! ✨

