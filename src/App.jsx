// React hook - special function that allows functional compnents to use 
// React features without writing class components (React v16.8)
// (useState, useEffect, useContext, useReducer, useCallback....)

// useState() - A React hook that allows the creation of a stateful variable 
// AND a setter function to update its value in the Virtual DOM.
// [name, setName]
import MyComponent from "./MyComponent"
//import Counter from "./Counter"


function App() {


  return (
    <>
      {/* <Counter /> */}
      <MyComponent />
    </>
  )
}

export default App
