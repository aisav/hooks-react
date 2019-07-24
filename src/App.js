import React, {useState, useEffect, useRef} from 'react';
import Toggle from './Toggle';

const App = () => {

  const [name, setName] = useState('')

  useEffect(() => {
    document.title = name
  })

  const ref = useRef()
  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={()=>{ref.current.classList.add('new-fake-class')}}>Level Up Dishes</h1>
      <Toggle/>

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
  );
};

const formSubmit = (val, setVal) => {
  console.log(`email sent to ${val}`)
  setVal('')
}

export default App;
