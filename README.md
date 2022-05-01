# Project #10 - Argent Bank API

This project was designed to connect to a backend API using React and Redux. Details of the original repo with details of the backend can be found [here](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API). The main requirements to complete were as follows:

• Users can visit the homepage.

• Users can log in to the system.

• Users can log out of the system.

• Users can only see information related to their own profile after logging in successfully.

• Users can edit the profile and persist the data to the database. 

As part of this project, I also created a swagger.yaml file with recommendations for the API design of the second phase of the project, which would allow the user to do the following:

• View all of their transactions for the current month.

• View additional details of a transaction in an additional view.

• Add, change, or remove additional information about a transaction.

Designs of what this would look like have been included in the 'designs/wirefames' section of the repo

### Technologies

• [React](https://reactjs.org)

• [Typescript](https://www.typescriptlang.org/)

• [Redux Toolkit](https://redux-toolkit.js.org/)

• [React Redux](https://react-redux.js.org/)
### Prerequisites

• yarn

• Node v16

• [MongoDB Community](https://www.mongodb.com/try/download/community)

### 1 - Installation

Clone the repository of SportSee front-end in your chosen location using the following command:

```git clone https://github.com/mancjames/Argent-Bank.git```

This project has been split into 2 seperate sections - Backend and Frontend.

### 2 - Backend Installation

Following completing the above, change directories into the Backend folder in your terminal. Once you have done this complete the following:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://localhost:3001 and you will now have two users in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### 3 - Frontend Installation

Please note that you'll need the backend server running to allow your frontend to work correctly. Failure to do this will result in a network error when you attempt to try and log in on the sign in page.

You'll need to complete the following to install the frontend of this project:

In your terminal, change directories to the frontend folder and use the following to install the required dependencies:

```yarn install```

Once done, you can launch the front-end application on port http://localhost:3000 by running the following command:

```yarn start```

For logging in purposes, please use the details provided above to access the two seperate accounts.