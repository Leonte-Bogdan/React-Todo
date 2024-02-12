import React from "react";
import Todo from "./components/Todo";
import StarBackground from "./components/Star-background";

function App() {
  return (
    <StarBackground>
      <div>
        <Todo />
      </div>
    </StarBackground>
  );
}

export default App;
