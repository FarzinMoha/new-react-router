import { LoadingProps } from '../types'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading({size = 20 , className}:LoadingProps) {
  return (
    <AiOutlineLoading3Quarters size={size} className={` text-inherit animate-spin ${className}`} /> 
  )
}
