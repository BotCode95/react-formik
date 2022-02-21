import { useForm } from '../hooks/useForm';
import '../styles/styles.css'

export const RegisterPage = () => {

    const {name, email, password, confirmPassword, onChange, resetForm, onSubmit} = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // const {} = formData;
    return (
        <div>
           <h1>Register Page</h1> 
           <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                />
                <input 
                    type="email"     
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                <input 
                    type="password"
                    placeholder="repeat password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                />
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset</button>
           </form>
        </div>
    )
}
