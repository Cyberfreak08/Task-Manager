import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import api from '../services/api';

function CreateTask() {
  // State to hold task information
  const [task, setTask] = useState({ title: '', description: '' });

  // History object for programmatic navigation
//   const history = useHistory();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API call to create task
    // await api.post('/tasks', task);

    // Redirect to task list after task creation
    // history.push('/');
  };

  return (
    <div>
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />

        <label>Description:</label>
        <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
