import { ChangeEvent, useState } from "react";
import Input from "../../components/Input";
import { AuthState } from "../../types";
import Btn from "../../components/Btn";
import { Link } from "react-router-dom";
import TextHoverBorder from "../../components/TextHoverBorder";
import useValidation from "../../utils/validation";

export default function SignUp() {
  const [state,setState] = useState<AuthState>({email:{value:'',required:true},password:{value:'',required:true},confirm_password:{value:'',required:true}})
  const {errors , validation , checkRequired} = useValidation(state)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => {
        const prevField = prevState[name] || { value: '', required: true };
        const newState = { ...prevState, [name]: { ...prevField, value } };
        validation({name,value,password: newState.password.value,confirmPassword: newState.confirm_password?.value || ''});
        return newState;
    });
  };

  const onClickHandler = (e:any) => {
  e.preventDefault()
  checkRequired()
  if(errors) return
  console.log(state);
  }

  return (
    <main className="w-full min-h-screen bg-amber-500 flex justify-center items-center">
      <form onSubmit={onClickHandler} className="w-full max-w-[500px] flex flex-col justify-start bg-amber-600 my-1 mx-2 p-3">
          <Input value={state.email.value} onChange={onChangeHandler} error={errors?.email} name="email" placeholder="Email"  type="email" inputContainerClass="mb-2" />
          <Input value={state.password.value} onChange={onChangeHandler} error={errors?.password} name="password" placeholder="Password" type="password" inputContainerClass="my-2" />
          <Input value={state.confirm_password?.value} onChange={onChangeHandler} error={errors?.confirm_password} name="confirm_password" placeholder="Confirm password" type="password" inputContainerClass="mb-2" />
          <Btn type="submit" primary  disabled={!!errors}>Accept</Btn>
          <Link to={'/sign-up'} className="my-2 text-blue-500 hover:text-blue-900 duration-200"> <TextHoverBorder txt="Don't you have account?" /></Link>
      </form>
    </main>
  )
}
