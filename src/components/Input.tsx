import { useState } from 'react'
import { InputProps } from '../types'
import { BiSolidHide, BiSolidShow } from "react-icons/bi";


export default function Input({type,inputClass,inputContainerClass,iconRight,error,...props}:InputProps) {
    const [currentType,setCurrentType] = useState(type)
    const passToggleHandler = () => setCurrentType((current)=> current === 'password' ? 'text' : 'password' )

  return (
    <div className={`w-full relative my-1 mb-6 focus-within:shadow-[var(--shadow-default)] rounded ${inputContainerClass}`}>
        <input  
            className={`w-full h-[48px] border ${error ? ' border-err' : 'border-black'} outline-none focus:outline-none rounded pl-3 ${type === 'password' ? 'pr-12' : 'pr-3'}  ${inputClass}`}
            {...props}
            type={type === 'password' ? currentType : type}
        />
        <span className='text-err absolute top-[100%] left-0 text-[12px] h-[20px] ml-1'>{error}</span>
        {type==='password' && 
        <span className=' absolute transform -translate-y-[50%] top-[50%] right-4'>
            {currentType === 'password' ? 
            <BiSolidShow size={25} className=' cursor-pointer text-primary hover:opacity-75' onClick={passToggleHandler} /> :
            <BiSolidHide size={25} className=' cursor-pointer text-primary hover:opacity-75' onClick={passToggleHandler} />
            }
        </span>
        }
        {iconRight && type!=='password' && 
        <span className=' absolute transform -translate-y-[50%] top-[50%] right-4'>
            {iconRight}
        </span>
        }
    </div>
  )
}
