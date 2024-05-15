# 326Team22
# UStudy

## Project Overview

UStudy is a web application designed to help students manage their study schedules and tasks. The backend server is built using Express and PouchDB, providing APIs for user management and task management.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

## starting the server
run 'npm install pouchdb express'
run 'npm run start'
The server will start and listen on port 3000 by default.

## API routes
API: POST /saveUser
Functionality: Saves the username to the database.

API: GET /getUser
Functionality: Retrieves the saved user from the database.

API: DELETE /deleteUser
Functionality: Deletes the saved user from the database.

API: POST /tasks
Functionality: Adds a new task to the database.

API: GET /tasks
Functionality: Retrieves all tasks from the database.

API: DELETE /tasks/:id
Functionality: Deletes a task by ID.
