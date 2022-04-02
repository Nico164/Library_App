import React, {createContext, useReducer} from 'react';

const initialState = {
  appName: "Seon",
};

//-------START REDUCER-------
const reducer = (
  state,
  action,
) => {
  switch (action.type) {
    case 'SET_APP_NAME': {
      return { ...state, appName: action.payload?.appName };
    }
  }
};
//------END REDUCER-------

//ref: kenapa state sama dispatch lebih baik dipisah contextnya https://hswolff.com/blog/how-to-usecontext-with-usereducer/
const AppStateContext = createContext(initialState);
const AppDispatchContext = createContext(() => {});

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
};

export { AppStateContext, AppDispatchContext, AppContextProvider };