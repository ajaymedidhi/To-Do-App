# TO DO Management - Mega Assignment Backend

This is the backend of a simple To Do Management System built with Node.js and MongoDB. It provides APIs to add, retrieve, update, and delete tasks.

## Features

- Add a new task with details such as title, description, and status.
- Retrieve a list of all tasks.
- Update a task by ID.
- Delete a task by ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Nodemon (for auto-restarting during development)
- CORS (for handling cross-origin requests)

## Project Structure

src/
│
├── controllers/  # API logic for adding, fetching, and deleting tasks
│
├── middleware/   # Mongoose schema for Student
│
├── models/       # Mongoose schema for Student
│
├── routes/       # API routes
│
├── app.js        # Main server entry point
│
├── server.js     # Main server entry point
└── .env



## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js (v12 or later)
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/ajaymedidhi/To-Do-Backend.git
    ```

2. Navigate to the project directory:

    ```sh
    cd To-Do-Backend
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```
    MONGO_URI=mongodb://localhost:27017/tododb
    PORT=5000
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:

    ```sh
    npm start
    ```

## API Endpoints

### Add a Task
- **URL**: `/api/tasks`
- **Method**: `POST`

#### Request Body:
```json
{
  "title": "Complete Assignment",
  "description": "Finish the To Do list API by end of the week",
  "status": "in-progress"
}

```

#### Response Body:
```json
{
  "_id": "64d3c6f1f9a5a811b5e00c78",
  "title": "Complete Assignment",
  "description": "Finish the To Do list API by end of the week",
  "status": "in-progress",
  "createdAt": "2024-09-25T00:00:00.000Z"
}

```

### Get All Tasks

- **URL**: `/api/tasks`
- **Method**: `GET`

#### Response Body:

```json

  [
  {
    "_id": "64d3c6f1f9a5a811b5e00c78",
    "title": "Complete Assignment",
    "description": "Finish the To Do list API by end of the week",
    "status": "in-progress",
    "createdAt": "2024-09-25T00:00:00.000Z"
  },
  {
    "_id": "64d3c7f2e9f7c90ab5d12345",
    "title": "Prepare Presentation",
    "description": "Prepare slides for the project presentation",
    "status": "pending",
    "createdAt": "2024-09-24T00:00:00.000Z"
  }
]
```
### Delete a Task

- **URL**: `/api/students/:id`
- **Method**: `DELETE`

```json
{
  "message": "Student deleted successfully"
}
```

## License

  - This project is licensed under the MIT License - see the LICENSE file for details.
  
  - This format ensures that the directory structure is displayed correctly and all sections are clear and properly separated.
