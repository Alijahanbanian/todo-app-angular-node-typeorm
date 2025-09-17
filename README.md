# Full-Stack Todo App

A full-stack **Todo Application** built with **Angular** for the frontend and **Node.js + Express + TypeScript + TypeORM (SQLite)** for the backend. This project showcases CRUD operations, RESTful API design, and seamless integration with Angular.

---

## Features
- Create, read, update, and delete todos
- RESTful API powered by Express and TypeScript
- SQLite database with TypeORM for data persistence
- Responsive Angular frontend
- Clean, modular project structure

---

## Tech Stack
**Frontend**  
- Angular  
- TypeScript  
- Angular Material (optional)

**Backend**  
- Node.js  
- Express.js  
- TypeScript  
- TypeORM  
- SQLite

---

## Project Structure
```
todo/
├── backend/                    # Node.js + Express + TypeScript API
│   ├── src/
│   │   ├── index.ts           # Server entry point
│   │   ├── data-source.ts     # TypeORM data source config (SQLite)
│   │   ├── entity/
│   │   │   └── Todo.ts        # Todo entity definition
│   │   ├── routes/
│   │   │   └── todoRoutes.ts  # Todo CRUD API routes
│   ├── package.json
│   ├── tsconfig.json
│   └── todo.sqlite            # SQLite database file
│
└── todo-frontend/              # Angular frontend
    ├── src/                   # Angular app source
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

---

## Installation & Setup

###  Clone the Repository
```bash
git clone https://github.com/your-username/todo-app.git
cd todo
```

###  Backend Setup
1. **Install Dependencies**  
   ```bash
   cd backend
   npm install
   ```

2. **Run Database Migrations**  
   If migrations are defined, run:
   ```bash
   npm run typeorm migration:run
   ```
   *(Note: If no migrations exist, TypeORM will automatically sync the schema with the `Todo.ts` entity.)*

3. **Start Backend Server**  
   ```bash
   npm run dev
   ```
   The server will run at `http://localhost:3000`.

###  Frontend Setup
1. **Install Dependencies**  
   ```bash
   cd ../todo-frontend
   npm install
   ```

2. **Start Frontend Server**  
   ```bash
   ng serve
   ```
   The app will run at `http://localhost:4200`.

---

## API Endpoints
| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/todos`        | Retrieve all todos    |
| POST   | `/todos`        | Create a new todo     |
| PUT    | `/todos/:id`    | Update a todo         |
| DELETE | `/todos/:id`    | Delete a todo         |

**Sample POST `/todos` Request Body**:
```json
{
    "title": "Learn TypeORM",
    "description": "Understand entity relations",
    "completed": false
}
```

---

## Development Scripts

### Backend
- `npm run dev` → Start server in development mode
- `npm run build` → Compile TypeScript code
- `npm start` → Run compiled code

### Frontend
- `ng serve` → Run development server
- `ng build` → Build for production
