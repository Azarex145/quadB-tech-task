import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

const Todo = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto  p-4  bg-gradient-to-r from-purple-500 to-purple-900">
        <h2 className="mt-3 mb-6 text-2xl font-bold text-slate-200 text-center uppercase">
          TODO APP
        </h2>
        <TaskInput />
      </div>
      <TaskList />
    </>
  );
};

export default Todo;
