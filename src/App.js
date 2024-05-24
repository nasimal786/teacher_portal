import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "#f5f5f5";
    }
  });
  return (
    <Provider store={store}>
      <div className="App">
        {isAuthenticated ? <Home /> : <Login onLogin={setIsAuthenticated} />}
      </div>
    </Provider>
  );
};

export default App;
