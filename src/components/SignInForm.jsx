// 1.Import useContext hook
import React, { useState, useContext } from 'react';
// 2. Import our context
import { AppContext } from '../contexts/app_context';

export const SignInForm = () => {
  // 3. Destructure our useCOntext
  let {learners, setLearners} = useContext(AppContext)
  //States
  const [data, setData] = useState('');

  // All logic goes before the return
  const handleChange = (event) => {
    setData(event.target.value);
  };
  const handleSubmit = (event) => {
    //prevents page from reloading upon form submission
    event.preventDefault();
    setLearners([...learners, data]);
    setData('');
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <h1>Who is signing in?</h1>
      <input
        type='text'
        name='name'
        placeholder='Your Name Here'
        value={data}
        onChange={(event) => {
          handleChange(event);
        }}
      />
      <input type='submit' value='Submit' />
    </form>
  );
};
