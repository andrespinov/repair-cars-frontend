import {Grid} from '@material-ui/core';
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

import { Button, Input } from '../../../../components';

import {FormContainer} from './styles';


const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  last_name: Yup.string().required(),
  dni: Yup.string().required(),
  phone_number: Yup.string().required(),
  email: Yup.string().email('Correo elentrónico incorrecto').required()
});

const emptyOwner = {
  name: '',
  last_name: '',
  dni: '',
  phone_number: '',
  email: ''
};

const Form = ({owner, onSubmit, onDelete, saveLoading, deleteLoading, error}) => {
  return (
    <FormContainer>
      <Formik
        initialValues={owner || emptyOwner}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({values, errors, touched, handleSubmit, setFieldValue}) => (
          <div className='form'>
            <div className='header'>
              <h1>{owner ? 'Editar Propietario' : 'Agregar Propietario'}</h1>
            </div>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Input
                  name='name'
                  label='Nombre'
                  value={values.name}
                  onChange={setFieldValue}
                  error={Boolean(touched.name && errors.name)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name='last_name'
                  label='Apellido'
                  value={values.last_name}
                  onChange={setFieldValue}
                  error={Boolean(touched.last_name && errors.last_name)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name='dni'
                  label='Cédula'
                  value={values.dni}
                  onChange={setFieldValue}
                  error={Boolean(touched.dni && errors.dni)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name='phone_number'
                  label='Celular'
                  value={values.phone_number}
                  onChange={setFieldValue}
                  error={Boolean(touched.phone_number && errors.phone_number)}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  name='email'
                  label='Correo electrónico'
                  value={values.email}
                  onChange={setFieldValue}
                  error={Boolean(touched.email && errors.email)}
                />
              </Grid>
            </Grid>
            {Boolean(error) && <div className='error-message'><span>{error}</span></div>}
            <div className='buttons-container'>
              {Boolean(owner) && (
                <Button
                  className='form-button'
                  title='Eliminar'
                  onClick={onDelete}
                  loading={deleteLoading}
                  style={{ marginRight: 20 }}
                />
              )}
              <Button
                className='form-button'
                title='Guardar'
                onClick={handleSubmit}
                loading={saveLoading}
              />
            </div>
          </div>
        )}
      </Formik>
    </FormContainer>
  );
};

export default Form;
