import React from "react";
import FoodInput from "./components/FoodInput.jsx";
import FoodList from "./components/FoodList.jsx";
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div>
      <h1>WELCOME TO YOUR NEXT MEAL!</h1>
      <FoodInput />
      <FoodList />
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);