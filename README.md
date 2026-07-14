User Directory

A simple React application that fetches and displays users from the JSONPlaceholder API. The project demonstrates core React concepts such as component composition, state management, side effects, props, and rendering dynamic lists.

Features
Fetches users from the JSONPlaceholder API
Displays each user's:
Name
Email
Company Name
Component-based architecture
Responsive, reusable UI components
Built with React and Vite
Tech Stack
React
JavaScript (ES6+)
Vite
CSS
Project Structure
src/
│
├── components/
│   ├── SearchBar.jsx
│   ├── UserCard.jsx
│   └── UserList.jsx
│
├── App.jsx
├── main.jsx
└── index.css
Getting Started
Prerequisites

Ensure you have the following installed:

Node.js
npm
Installation

Clone the repository:

git clone <repository-url>

Navigate into the project directory:

cd user-directory

Install dependencies:

npm install

Start the development server:

npm run dev

Open your browser and navigate to the URL displayed in the terminal (typically http://localhost:5173).

Data Source

This project uses the free JSONPlaceholder REST API.

API Endpoint:

https://jsonplaceholder.typicode.com/users
Architecture

The application follows a top-down data flow.

JSONPlaceholder API
        │
        ▼
     App.jsx
 (State & Data Fetching)
        │
        ▼
     UserList
        │
        ▼
     UserCard
Component Responsibilities
App
Fetches data from the API
Stores application state
Passes data to child components
UserList
Receives an array of users
Renders a UserCard for each user
UserCard
Displays a single user's:
Name
Email
Company Name
SearchBar
Displays the search input
Will manage user search functionality in later iterations
React Concepts Demonstrated
Functional Components
Component Composition
Props
State (useState)
Side Effects (useEffect)
Rendering Lists with map()
React Keys
Unidirectional Data Flow
Future Improvements
Controlled search input
Loading state
Error handling
"No users found" state
Add User form
Form validation
Responsive design improvements
Unit testing
API abstraction layer
Learning Objectives

This project was built to practice:

Breaking a UI into reusable components
Thinking in React
Managing state effectively
Fetching external data
Passing data through props
Building maintainable component architecture
Applying separation of concerns and single responsibility principles
