import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./router";
import "./App.scss";

interface RouteProps {
  layout: React.ComponentType<any>;
  path: string;
  children: React.ReactNode;
}

const App: React.FC<RouteProps> = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
