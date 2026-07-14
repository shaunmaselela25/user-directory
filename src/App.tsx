// @ts-ignore: allow importing untyped JS components
import SearchBar from "./components/SearchBar";
// @ts-ignore: allow importing untyped JS components
import UserList from "./components/UserList";

function App() {

    return (

        <div className="app">

            <header>

                <h1>User Directory</h1>

            </header>

            <SearchBar />

            <UserList />

        </div>

    );

}

export default App;
