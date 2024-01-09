import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
// import CreateTask from './components/CreateTask';
// import EditTask from './components/EditTask';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          {/* <Route path="/create" component={CreateTask} /> */}
          {/* <Route path="/edit/:id" component={EditTask} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
