import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/Input";
import { AuthState } from "../../types";
import Btn from "../../components/Btn";
import { Link } from "react-router-dom";
import TextHoverBorder from "../../components/TextHoverBorder";
import useValidation from "../../utils/validation";

export default function SignIn() {
  const [state,setState] = useState<AuthState>({email:{value:'',required:true},password:{value:'',required:true}})
  const { validation , errors , checkRequired } = useValidation(state)

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target
    setState((prevState)=>{
      const prevField = state[name] || {value:'',required:false}
      const newState = {...prevState,[name]:{...prevField,value}}
      validation({name,value})
      return newState
    })
  }

  const onLoginHandler = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    checkRequired()
    if(errors) return
    console.log(state);
  }

  return (
    <main className="w-full min-h-screen bg-amber-500 flex justify-center items-center">
      <form onSubmit={onLoginHandler} className="w-full max-w-[500px] flex flex-col justify-start bg-amber-600 my-1 mx-2 p-3">
          <Input value={state.email.value} error={errors?.email} onChange={onChangeHandler} name="email" placeholder="Email"  type="email" inputContainerClass="mb-4" />
          <Input value={state.password.value} error={errors?.password} onChange={onChangeHandler} name="password" placeholder="Password" type="password" />
          <Btn type="submit" isLoading primary>Accept</Btn>
          <Link to={'/sign-up'} className="my-2 text-blue-500 hover:text-blue-900 duration-200"> <TextHoverBorder txt="Don't you have account?" /></Link>
      </form>
    </main>
  )
}
