import logo from './logo.svg';
import './App.css';

// -------Imports
import { SignInForm } from './components/SignInForm';
// import { useState } from 'react';
import List from './components/List';
import AttendanceCount from './components/AttendanceCount';

function App() {
  // Learners state -- list of learners state
  // const [learners, setLearners] = useState([]);

  return (
    <div className='App'>
      <SignInForm  />
      <AttendanceCount />
      <List />
    </div>
  );
}

export default App;
