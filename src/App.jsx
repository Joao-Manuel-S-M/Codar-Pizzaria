import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Erivax from "./Pages/Erivax/Erivax";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      {isLogin && <Header />}
      <Routes>
        <Route
          exact
          path="/"
          element={<Login setIsLogin={(e) => setIsLogin(e)} />}
        />

        <Route 
          exact 
          path="/register" 
          element={<Register />} 
        />

        <Route
          exact
          path="/home"
          element={isLogin ? <Home /> : <Navigate replace to={"/"} />}
        />

        <Route 
          exact 
          path="/register" 
          element={<Register />} 
        />

        <Route 
          exact 
          path="/erivax" 
          element={isLogin ? <Erivax /> : <Navigate replace to={"/"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
