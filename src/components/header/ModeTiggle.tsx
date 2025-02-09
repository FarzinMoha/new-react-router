import { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";

export default function ModeTiggle() {
  const [mode,setMode] = useState(localStorage.getItem('mode'))

  localStorage.setItem('mode',mode === '' ? 'dark' : '')
  document.body.classList.toggle('dark', mode === 'dark');
  
  const toggleModeHandler = () => setMode((mode)=> mode === '' ? 'dark' : '')
  console.log('ModeTiggle');
  return (
    <button onClick={toggleModeHandler} className='cursor-pointer ml-2'>
        {mode==='' ?  <MdDarkMode size={25} className='text-primary' /> : <FaSun size={25} className='text-accent' /> }
    </button>
  )
}
