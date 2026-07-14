//This is a layout
function App() {
  return (
    <div className="app">

      <header>
        <h1>User Directory</h1>
      </header>

      <section className="search-section">
            <input type="text"
            placeholder="Search users..."
            />
      </section>

      <section className="users-section">
          <div className="user-card">
            <h2>John Doe</h2>
            <p>john.doe@example.com</p>
          </div>
      </section>

    </div>
  );
}

export default App;
