import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  
  const todos = useSelector((state) => state.todos);

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-cyan-100 to-blue-500">
      {todos.length === 0 ? (
        <div className="text-center text-base p-4">
          <p>It looks like you haven't started any tasks yet.</p>
          <p>Get started by adding your first task!</p>
        </div>
      ) : (
        <>
          <ul>
            {todos.map((todo, index) => (
              <TaskItem key={index} todo={todo} index={index} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TaskList;
