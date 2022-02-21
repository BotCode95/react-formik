import { Form, Formik } from 'formik';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    
    //    name: '',
    // email: '',
    // password: '',
    // confirmPassword: ''
    

    return (
        <div>
            <h1>Register Formik Page</h1> 
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'El nombre debe contener 3 o más caracteres')
                            .max(15, 'El nombre no debe ser mayor a 15 caracteres')
                            .required(' Requerido'),
                        email: Yup.string()
                            .email('Revise el formato del correo')
                            .required(' Requerido'),
                        password1: Yup.string()
                            .min(6, 'Minimo 6 caracteres')
                            .required(' Requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden')
                            .required(' Requerido')
                    })
                }
            >
                {({handleReset}) => (
                    <Form>
                        <MyTextInput 
                            label='Nombre' 
                            name='name' 
                            placeholder='Name'
                        />
                        <MyTextInput 
                            label='Email' 
                            name='email' 
                            placeholder='email@gmail.com'
                        />
                        <MyTextInput 
                            label='Password' 
                            name='password1' 
                            placeholder='Password'
                        />
                         <MyTextInput 
                            label='Confirm Password' 
                            name='password2' 
                            placeholder='Repite your password'
                        />
                        
                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>Reset</button>

                    </Form>
                )}
           
            </Formik>
        </div>
    )
}
