//This is our context
// 1. Import createContext
import { useState, createContext } from 'react';

// 2. create our context - this creates our context
export const AppContext = createContext();

// 3. create context provider - is a function to use context throughout entire app
const AppContextProvider = (props) => {
  // 4. Bring in the staes we are making global
  const [learners, setLearners] = useState([]);

  return (
    <AppContext.Provider
      value={{
        learners,
        setLearners,
      }}
    >
      {/* Passes down the value to all children of the provider */}
      {props.children}
    </AppContext.Provider>
  );
};

// 5. export our context provider
export default AppContextProvider;
