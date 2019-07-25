import React, {useState, useContext} from 'react';
import {UserContext} from './App';
import Hello from './Hello';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false)
  const userInfo = useContext(UserContext)
  console.log('userInfo', userInfo)
  if(!userInfo.user) return null

  return (
      <div>
        <button onClick={() => setToggle(!isToggled)}>Hide Scrolling</button>
        {isToggled && <Hello/>}
      </div>
  )
}

export default Toggle

