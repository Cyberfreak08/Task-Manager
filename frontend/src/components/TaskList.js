import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTasks } from '../api/taskApi';
// import api from '../services/api';

function TaskList() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server on component mount
  useEffect(() => {
    const response = getAllTasks();
      setTasks(response.data);
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks?.map((task) => (
          <li key={task._id}>
            {task.title}{/* <Link to={`/edit/${task._id}`}>{task.title}</Link> */}
          </li>
        ))}
      </ul>
      <Link to="/create">Create Task</Link>
    </div>
  );
}

export default TaskList;
