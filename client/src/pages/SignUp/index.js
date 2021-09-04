import React from 'react';
import {
  Formik, Field, Form
} from 'formik';
import * as Yup from 'yup'
import TextInput from '../../components/TextInput';
import userService from '../../services/userService'
import { Link, useHistory } from 'react-router-dom'

const SignUp = () => {
  const history = useHistory();
  
  const initialValues = {
    username: "",
    password: "",
    passwordConfirm: "",
  }
  
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required').min(3, "username must be longer than 3 letters"),
    password: Yup.string().required('Password is required').min(7, "password must be longer than 7 letters"),
    passwordConfirm: Yup.string().required('Password confirmation is required').min(7, "password must be longer than 7 letters"),
  })

  const submitForm = async (values) => {
    const credentials = {
      username: values.username,
      password: values.password,
    }
    try{
      await userService.createUser(credentials)
      history.push('/login')
    } catch(error) {
      console.log(error)
    }
    

  };

  return(
    <div className="w-full md:w-4/12 h-screen flex flex-col p-5 bg-gray-200 align-center">
      <div className="mb-4 text-2xl font-semibold">
        Signup
      </div>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {submitForm(values)}}
    > 
      {() => (
        <Form className="flex-col">
          <TextInput name="username" placeholder="Username" type="email" component={TextInput}/>
          <Field name="password" placeholder="Password" type="password" component={TextInput}/>
          <Field name="passwordConfirm" placeholder="Confirm password" type="password" component={TextInput}/>
          <button className="rounded-md w-full bg-green-200 h-12 px-4" type="submit">Sign up</button>
        </Form>
      )}
      
    </Formik>
    <Link className="mt-4 self-center text-green-500 text-sm" to='/login'>Log In</Link>
    </div>
  )
}

export default SignUp;