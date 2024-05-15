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
Saves the username to the database.

API: GET /getUser
Retrieves the saved user from the database.

API: DELETE /deleteUser
Deletes the saved user from the database.

API: POST /tasks
Adds a new task to the database.

API: GET /tasks
Retrieves all tasks from the database.

API: DELETE /tasks/:id
Deletes a task by ID.

API: PUT //api/study-times/:id'
Edits current reservation in database
