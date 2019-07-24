import React, {useState, useEffect, useRef, createContext} from 'react';
import Toggle from './Toggle';
import Counter from './Counter';

export const UserContext = createContext()

const App = () => {

  const [name, setName] = useState('')

  useEffect(() => {
    document.title = name
  })

  const ref = useRef()
  return (
      <UserContext.Provider value={{user: false}}>
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={()=>{ref.current.classList.add('new-fake-class')}}>Level Up Dishes</h1>
      <Toggle/>
      <Counter/>

      <form onSubmit={ e => {
        e.preventDefault()
        formSubmit(name, setName)
      }}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />

        <button>
          Submit
        </button>

      </form>
    </div>
      </UserContext.Provider>
  );
};

const formSubmit = (val, setVal) => {
  console.log(`email sent to ${val}`)
  setVal('')
}

export default App;
