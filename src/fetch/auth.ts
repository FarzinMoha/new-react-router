import { redirect } from "react-router-dom";
import { supabase } from "../supabase";
import notif from "../utils/notif";


export async function signUpAction({ request }: { request: Request }){
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    let { error } = await supabase.auth.signUp({email,password})
    if(error){
        notif(error.message,'danger')
        return
    }else{
        notif('registered successfully','success')
        redirect('/sign-in')
    }
    return redirect('/');
};


export async function getUser(){
    const { data, error } = await supabase.auth.getUser();
    console.log({ data, error });
    return {data,error}
}