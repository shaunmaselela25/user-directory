// @ts-ignore: allow importing untyped JS components
import { useEffect, useState } from "react";
// @ts-ignore: allow importing untyped JS components
import SearchBar from "./components/SearchBar";
// @ts-ignore: allow importing untyped JS components
import UserList from "./components/UserList";

function App() {
  // State to store users fetched from the API
  const [users, setUsers] = useState([]);

  // Fetch users once when the component mounts
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    fetchUsers();
  }, []);

  // Temporary: Verify data is being fetched
  console.log(users);

  return (
    <div className="app">
      <header>
        <h1>User Directory</h1>
      </header>

      <SearchBar />

      <UserList users={users} />
    </div>
  );
}

export default App;