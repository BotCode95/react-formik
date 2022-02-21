import { ChangeEvent, FormEvent, useState } from "react";



export const useForm = <T>(initState : T) => {
    const [formData, setFormData] = useState(initState);

    // const {name, email,password, confirmPassword} = formData

    const onChange = ((e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    })

    const resetForm = () => {
        setFormData({
            ...initState
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }
    
    return {
        ...formData,
        formData,
        onChange,
        resetForm,
        onSubmit
    }
}