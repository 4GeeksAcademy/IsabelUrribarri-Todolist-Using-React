import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TodoList from "./TodoList";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-grey my-4 title ">Todos</h1>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default Home;