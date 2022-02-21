import {Formik,Form}from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components/MyTextInput';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';


const initialValues : {[key: string]: any} = {}
const requiredFields : {[key: string]: any} = {}

for (const input of formJson) {
  initialValues[input.name] = input.value
  if(!input.validations) continue;
  let schema = Yup.string()
  for(const rule of input.validations) {
    if(rule.type === 'required'){
        schema = schema.required(rule.description)
    }
    if(rule.type === 'minLength'){
        schema = schema.min((rule as any).value || 2, rule.description || '2' )
    }
    if(rule.type === 'email'){
      schema = schema.email(rule.description)
  }
  }
  requiredFields[input.name] = schema;

}


const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  return (
    <div>
        <h1>DynamicForm</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
            {(formik) => (
              <Form>
                {formJson.map(({type,label,name, placeholder, options}) => {

                  if(type === 'input' ||type === 'email' || type === 'password'){
                    return <MyTextInput
                            key={name}
                            type={(type as any)}
                            label={label}
                            name={name}
                            placeholder={placeholder}
                          />
                  }else if( type === 'select') {
                    return (
                        <MySelect
                          key={name}
                          label={label}
                          name={name}
                        >
                          <option value="">Select an Option</option>
                          {
                            options?.map(({id,value}) => (
                              <option key={id} value={value}>{value}</option>
                            ))
                          }
                        </MySelect>
                    )
                  }
                  throw new Error(`El Type: {type} no es soportado`)
                })}
                <button type='submit'>Submit</button>
              </Form>
            )}
        </Formik>
    </div>
  )
}
