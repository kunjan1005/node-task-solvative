# node-task-solvative
An application for managing and reviewing content.
## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js (version 20.11.0)
- npm (version 10.2.4)
- Database (Postgresql)



1. Clone the repository:

   ```bash
   git clone https://github.com/kunjan1005/node-task-solvative

### Installing

cd backend
npm i
npm run start:dev

# new terminal

cd frontend
npm i
npm run start

# Problem Statement
Live Reviews allows users to add/edit/remove review and view all reviews with live feeding.

# Completed

Create REST APIs to perform CRUD operations of notes --done
Store each review with id, title, content and date-time --done
Implement web-socket, which should broadcast whenever any review is getting added/edited/deleted --pending

UI side
review listing --done(search and sorting implemented in backend only)
add review --done
delete review --done
edit review --pending (implemented backend only)


//env

PORT=4000 
DB_NAME=
DB_USER=
DB_PASS=
DB_HOST=
DB_LOG=