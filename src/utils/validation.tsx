import { useState } from "react";
import { ValidationProps } from "../types";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function useValidation(state:any) {
    const [errors, setErrors] = useState<{ [key: string]:string} | null>(null);
    function checkRequired() {
        const errors: { [key: string]: string } = {};
        Object.keys(state).forEach((key) => { if (state[key].value === "" && state[key].required) errors[key] = "This field is required";});
        setErrors((prevErrors) => {
            let newErrors = { ...prevErrors, ...errors };
            return Object.keys(newErrors).length > 0 ? newErrors : null;
        });
        return Object.keys(errors).length > 0 ? errors : null;
    }
    
    function validation({ name, value, password, confirmPassword }: ValidationProps) {
        setErrors((prevErrors) => {
            let newErrors = { ...prevErrors };
            const addError = (key: string, message: string) => message ? newErrors[key] = message : delete newErrors[key]
            switch (name) {
                case 'email':
                    addError(name, emailRegex.test(value) ? '' : 'Email is not valid');
                    break;
                case 'password':
                    addError(name, value.length >= 6 ? '' : 'Password must be at least 6 characters');
                    if(newErrors && !newErrors.password){
                        addError('confirm_password', value !== confirmPassword ? 'Passwords do not match' : '');
                    }
                    break;
                case 'confirm_password':
                    addError(name, value !== password ? 'Passwords do not match' : '')
                    break;
            }
            return Object.keys(newErrors).length > 0 ? newErrors : null;
        });
    }
    return { errors, validation , checkRequired };
}
