import { ButtonProps } from "../types";
import Loading from "./Loading";

export default function Btn({
  primary,
  secondary,
  borderPrimary,
  borderSecondary,
  isLoading,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-full rounded
        ${primary ? 'bg-primary' : secondary ? 'bg-secondary' : 'bg-transparent'} 
        ${borderPrimary ? ' border border-primary' : borderSecondary ? 'border border-secondary' : 'border border-transparent'} 
        cursor-pointer text-center flex justify-center items-center bg-amber-900 h-[48px] text-black ${isLoading ? 'shadow-[var(--shadow-default)]' : ''} ${className}
         disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-gray-100
        `}
    {...props}>
      {isLoading ? <Loading /> : children}
    </button>
  );
}
