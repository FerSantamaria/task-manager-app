
# Task manager app

A simple react app for managing your tasks. It allows you to view, create, update and delete tasks in a variety of states (or lists).

![alt text](https://github.com/FerSantamaria/task-manager-app/blob/main/readme_content/task-manager.jpeg "Task manager app")


## Tools, libraries and dependencies
This app was built using [vite](https://vitejs.dev/) to reduce the boilerplate
code generated by other tools like [CRA](https://create-react-app.dev/) and improve 
the performance on development and uses the following libraries:

Library | Description
--- | --- 
[Apollo Client](https://www.apollographql.com/docs/react/) | State manager client used to connect with the GraphQL API provided
[Day.js](https://day.js.org/) | Minimalist library for date manipulation
[Formik](https://formik.org) | Library used for form state handling and form submissions
[react-select](https://react-select.com/home) | Used for Selects inputs creation/manipulation
[styled-components](https://styled-components.com/) | For easily styling the components without worrying about classes
[yup](https://github.com/jquense/yup) | Schema builder for forms validations

To run this app, your system must have this dependencies:
Dependency | Min Version
--- | --- 
[Node.js](https://nodejs.org/en/) | 18.0
[Yarn](https://classic.yarnpkg.com/en/) | 1.22

## Environment Variables

To run this project, you will need to add the following environment variable to your 
.env file (theres a .env.template file in the repository to help you with this proccess)
and the content must be the provided API Token

`VITE_API_TOKEN`

## Run Locally

 Clone the project

```bash
  git clone git@github.com:FerSantamaria/task-manager-app.git
```

Go to the project directory

```bash
  cd task-manager-app
```

Install dependencies with

```bash
  yarn
```

or

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```

The server should start running and the app will be server at http://localhost:3001
## Additional comments

- All new task are created under the To Do state.
- The filtering feature wasn't implemented because time restrinctions but everything
else should be there.
