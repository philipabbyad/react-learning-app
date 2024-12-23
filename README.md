# My React Learning App

A simple React application designed as a learning tool to help you understand fundamental React concepts. This application demonstrates basic usage of JSX, functional components, props, and state management in React, starting from a "Hello World" foundation.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Key Concepts Demonstrated](#key-concepts-demonstrated)
- [Browser Compatibility](#browser-compatibility)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Overview

This refactored version uses **React Router** to keep everything in a single-page web app. Instead of multiple HTML files, users navigate between routes (`/`, `/todo`, `/searchable`) to access different features and demonstrations. This approach is more aligned with modern React best practices and provides a more seamless user experience.


## Features

- **Hello World**: The foundational "Hello World" component to begin your React journey.
- **Greeting Component (Props)**: Learn how to pass and use props in a functional component.
- **Counter Component (State)**: Understand how to manage component state using the `useState` hook.
- **Clear Documentation**: Easy-to-follow instructions for setup, running, and testing the app locally.
- **Comprehensive Tests**: Included unit tests ensure components work as expected and maintain code quality.
- **Modular Architecture**: The codebase is organized into separate files and folders for clarity and maintainability.

## Prerequisites

- **Node.js** (version 14 or above)  
  [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or [Yarn](https://classic.yarnpkg.com/en/)
- **React Router** (`react-router-dom`) is needed for routing in this app.


## Installation

Clone the repository:
```bash
git clone https://github.com/your-username/my-react-learning-app.git
cd my-react-learning-app
```

Install dependencies:
```bash
npm install
```

or

```bash
npm install
```

Install `react-router-dom` manually, if needed:
```bash
npm install react-router-dom
```
or
```bash
yarn add react-router-dom
```

## Running the Application

Install dependencies:
```bash
npm start
```

or

```bash
yarn start
```

Open http://localhost:3000 in your browser. You’ll see a navigation bar with links to:

- **Home** (Shows HelloWorld, Greeting, Counter)
- **To-Do List**
- **Searchable List**

When you click a link, the app updates the URL and displays the corresponding component, without fully reloading the page.

## Testing

Run unit tests:

```bash
npm test
```

or

```bash
yarn test
```

The tests run in watch mode by default. Press q to quit watch mode.
These tests are powered by Jest and React Testing Library, ensuring components behave as expected.

## Building for Production

Create an optimized production build:

```bash
npm run build
```

or

```bash
yarn build
```

This command creates a production build in the `build` folder, which contains optimized files ready to be deployed to your hosting platform. This includes the entire single-page application with client-side routing.

## Project Structure

```arduino
my-react-learning-app/
├─ public/
│  ├─ index.html
│  ├─ favicon.ico
│  └─ styles.css
├─ src/
│  ├─ components/
│  │  ├─ HelloWorld.js
│  │  ├─ Greeting.js
│  │  ├─ Counter.js
│  │  ├─ TodoList.js
│  │  └─ SearchableList.js 
│  ├─ pages/
│  │  ├─ Home.js
│  │  ├─ TodoPage.js
│  │  └─ SearchablePage.js
│  ├─ App.js 
│  ├─ index.js 
│  ├─ App.test.js
│  ├─ setupTests.js
│  └─ __tests__/
│     ├─ Greeting.test.js
│     ├─ Counter.test.js
│     ├─ TodoList.test.js
│     └─ SearchableList.test.js
├─ jest.config.js
├─ package.json
└─ README.md

```

## Key Concepts Demonstrated

- **Single-Page Application** structure using **React Router**
- **JSX**: Learn how to write markup directly in JavaScript files.
- **Functional Components**: Understand the simplest way to create components in React.
- **Props**: Explore how to pass data into components to make them reusable and flexible.
- **State (useState Hook)**: Discover how to manage dynamic data within components.
- **Conditional Rendering** and **Filtering** (To-Do List, Searchable List).
- **Client-Side Navigation** without full page reloads.
- **Testing**: Ensure quality and maintainability by using Jest and React Testing Library.

## Browser Compatability

This application is compatible with all major modern web browsers, including:

- Google Chrome (latest versions)
- Mozilla Firefox (latest versions)
- Microsoft Edge (latest versions)
- Safari (latest versions)

## Troubleshooting

- **Port Already in Use**: If `localhost:3000` is already in use, you may be prompted to run the app on another port. Confirm by pressing `y` or kill the process using that port and restart.
- **Module Not Found Errors**: If you encounter issues related to missing modules, ensure that you’ve run `npm install` or `yarn install` before starting the app.
- **Cannot find module 'react-router-dom'**: Ensure `react-router-dom` is installed and listed in your dependencies.
- **Broken links or 404 on refresh**: For local development, Create React App handles routing gracefully. For production, ensure your host is configured to serve the `index.html` on all routes (this is standard for SPAs).
- **Clearing Cache**: If the application behaves unexpectedly, try clearing your browser cache or running `npm start` again.

## Contributing

Contributions are welcome! Whether you’ve found a bug, improved documentation, or added a new feature, we appreciate all efforts to enhance this learning tool.

**To contribute:**
1. Fork the repository.
2. Create a new feature branch: `git checkout -b my-feature-branch`
3. Make your changes.
4. Test thoroughly.
5. Submit a pull request on GitHub explaining what changes you made and why.

Please keep your contributions aligned with the educational purpose of this application. Any contribution that simplifies concepts, improves the clarity of code or documentation, or enhances the user experience is highly valued.

## Acknowledgments

- **React:** For providing a powerful library that simplifies building complex UIs.
- **Jest & React Testing Library:** For making testing components straightforward and accessible.
- **Open-Source Community:** For the continuous support, tutorials, and best practices shared publicly.

## License

This project is licensed under the MIT License, which is a permissive open-source license. You’re free to use, modify, and distribute this code as you see fit. See the LICENSE file for full details.
