import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from "./config/Routes";
import "./App.css";
import UserApi from "./models/user";


function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem("id"));

  const storeUser = userId => {
    localStorage.setItem("id", userId);
    setCurrentUser(userId);
  };

  const logout = event => {
    event.preventDefault();

    localStorage.removeItem("id");

    UserApi.logout().then(res => {
      setCurrentUser(null);
    });
  };

  return (
    <div className="App">
        <Header 
          currentUser={ currentUser } 
          logout={ logout }
        />
        <Routes 
          currentUser={ currentUser }
          storeUser={ storeUser }
        />
        <Footer />
      {currentUser ? (
        <Header currentUser={currentUser} logout={logout} />
      ) : null}
      <Routes currentUser={currentUser} storeUser={storeUser} />
      <Footer />
    </div>
  );
}

export default App;
