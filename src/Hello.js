import React, {useRef} from 'react'
import {useBodyScrollLock} from './bodyScrollLock'
import {useOnclickOutside} from './useOnclickOutside'

const Hello = ({setToggle}) => {

  const ref = useRef()

  useOnclickOutside(ref, () => setToggle(false))

  useBodyScrollLock()

  return (
      <div className="dish-card" ref={ref}>
        <form>
          <div className="form-row">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name"/>
          </div>
        </form>
      </div>
  )
}

export default Hello
