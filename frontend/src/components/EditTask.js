import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import api from '../services/api';

function EditTask() {
  // State to hold task information
  const [task, setTask] = useState({ title: '', description: '' });

  // Extract task ID from URL parameters
  const { id } = useParams();

  // History object for programmatic navigation
//   const history = useHistory();

  // Fetch task details from the server on component mount
  useEffect(() => {
    // api.get(`/tasks/${id}`).then((response) => {
    //   setTask(response.data);
    // });
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make API call to update task
    // await api.put(`/tasks/${id}`, task);

    // Redirect to task list after task update
    // history.push('/');
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />

        <label>Description:</label>
        <textarea value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />

        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default EditTask;
