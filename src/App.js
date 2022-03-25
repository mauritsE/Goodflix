import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Library from "./components/library";

function App() {
  return (
    <main className="container">
      <NavBar />
      <Library />
    </main>
  );
}

export default App;
