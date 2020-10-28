import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Input, Button } from '../../../../components'
import { LoginFormContainer } from './styles'

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  password: Yup.string().required()
})

const LoginForm = ({ onSubmit, loading }) => {

  return (
    <LoginFormContainer>
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
     >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        setFieldValue
      }) => (
         <div className='form'>
            <div  className='header'>
              <h1>Welcome!</h1>
              <span>Consequat laborum fugiat dolore fugiat culpa cupidatat Lorem elit.</span>
            </div>
           <Input
              name='name'
              label='Username'
              value={values.name}
              onChange={setFieldValue}
              error={Boolean(touched.name && errors.name)}
           />
           <Input
              name='password'
              label='Password'
              value={values.password}
              onChange={setFieldValue}
              type='password'
              error={Boolean(touched.password && errors.password)}
           />
           <Button className='login-button' title='Login' onClick={handleSubmit} loading={loading} />
         </div>
       )}
       </Formik>
    </LoginFormContainer>
  )
}

export default LoginForm
