import {Formik} from 'formik';
import React from 'react';
import * as Yup from 'yup';

import {Input, Button} from '../../../../components';

import {LoginFormContainer} from './styles';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginForm = ({onSubmit, loading, error}) => {
  return (
    <LoginFormContainer>
      <Formik
        initialValues={{name: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({values, errors, touched, handleSubmit, setFieldValue}) => (
          <div className="form">
            <div className="header">
              <h1>Iniciar sesión</h1>
            </div>
            <Input
              name="name"
              label="Ususario"
              value={values.name}
              onChange={setFieldValue}
              error={Boolean(touched.name && errors.name)}
            />
            <Input
              name="password"
              label="Contraseña"
              value={values.password}
              onChange={setFieldValue}
              type="password"
              error={Boolean(touched.password && errors.password)}
            />
            {Boolean(error) && <div className='error-message'><span>{error}</span></div>}
            <Button
              className="login-button"
              title="Login"
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        )}
      </Formik>
    </LoginFormContainer>
  );
};

export default LoginForm;
