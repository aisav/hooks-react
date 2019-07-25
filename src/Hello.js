import React from 'react'
import { useBodyScrollLock } from './bodyScrollLock'

const Hello = () => {
  useBodyScrollLock()
  return (
      <h2>Hello</h2>
  )
}

export default Hello
