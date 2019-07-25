import  {useEffect} from 'react'

function useOnclickOutside(ref, handler) {
  useEffect(() => {
    const listener = e => {
      if(ref.current.contains(e.target))
        console.log(ref.current)
      else handler()
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  },[])
}

export {useOnclickOutside}

