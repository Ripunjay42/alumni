# Alumni Information Project

# DEMO
  https://alumni-info.vercel.app

  
## Overview

This is a web application that allows alumni to register, and an admin to review, update, and delete users. 
Additionally, the admin can add events, and general users can visit the verified alumni. 
The project is built using React, Tailwind CSS, Node.js, Express.js, and MySQL.

## Features

- **Alumni Registration**: Alumni can register and create profiles.
- **Admin Management**: Admins can review, update, and delete alumni profiles.
- **Event Management**: Admins can add and manage events.
- **Verified Alumni Access**: General users can visit and view verified alumni profiles.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Node.js**: JavaScript runtime for the backend.
- **Express.js**: Web application framework for Node.js.
- **MySQL**: Relational database management system.

## Getting Started

### Prerequisites

- Node.js installed on your local machine.
- MySQL server set up on your local machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ripunjay42/alumni.git
   

2. Navigate to the project directory(client):

   ```bash
   cd alumni
   cd client
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```
   
4. Navigate to the project directory(server):
   
```bash
   cd alumni
   cd server
   ```

5. Install dependencies:

   ```bash
   yarn install
   ```
   
   
## Database Setup

1. Start your MySQL server and create a new database:

```sql
  CREATE DATABASE alumni;
```

2. create tables as given in the alumni.sql file

3. index.js (configure according to your's)

```
  const db = mysql.createConnection({
  host: 'localhost',
  user: 'your username',
  password: 'your password',
  database: 'alumni',
});
```

## Usage

1. Start the development server:

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the application.
