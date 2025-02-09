import { ReactElement } from "react"

export interface navItemProps{
    txt:string
    path:string
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type:string
    inputClass?:string
    inputContainerClass?:string
    iconRight?:ReactElement
    error?:string | null
}

export interface AuthState {
    [key: string]: { value: string; required: boolean }
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    primary?:boolean
    secondary?:boolean
    borderPrimary?:boolean
    borderSecondary?:boolean
    isLoading?:boolean
    className?:string
}

export interface LoadingProps{
    size?:number
    className?:string
}

export interface TextHoverBorderProps{
    txt:string
}

export interface ValidationProps{
    name:string
    value:any
    password?:string
    confirmPassword?:string
}