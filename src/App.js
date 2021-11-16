import "./App.css";
import Nav from "./Nav";
import Feed from "./Feed";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="Feed" element={<Feed />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>;
};

export default App;
