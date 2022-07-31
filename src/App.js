import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <div className="wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
