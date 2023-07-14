import logo from './logo.svg';
import './App.css';

// -------Imports
import { SignInForm } from './components/SignInForm';
import { useState } from 'react';
import List from './components/List';
import AttendanceCount from './components/AttendanceCount';

function App() {
  // Learners state -- list of learners state
  const [learners, setLearners] = useState([]);

  const addTwo = () => {};

  return (
    <div className='App'>
      <SignInForm setLearners={setLearners} learners={learners} />
      <AttendanceCount learners={learners} />
      <List addTwo={addTwo} learners={learners} />
    </div>
  );
}

export default App;
