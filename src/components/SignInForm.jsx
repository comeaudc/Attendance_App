import React, { useState } from 'react';

export const SignInForm = (props) => {
  //States
  const [data, setData] = useState('');

  // All logic goes before the return
  const handleChange = (event) => {
    setData(event.target.value);
  };
  const handleSubmit = (event) => {
    //prevents page from reloading upon form submission
    event.preventDefault();
    props.setLearners([...props.learners, data]);
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
