import {useLayoutEffect} from 'react'

function useBodyScrollLock() {
  useLayoutEffect(() => {
    document.body.style.overflow='hidden'

    // return function cleanup () {
    return   () => {
      document.body.style.overflow=''
    }
  })
}

export {useBodyScrollLock}
