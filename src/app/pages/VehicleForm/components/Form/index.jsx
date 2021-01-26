import {Grid,Link} from '@material-ui/core';
import { Formik } from 'formik'
import React from 'react'
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { Button, Input } from '../../../../components';

import {FormContainer} from './styles';


const validationSchema = Yup.object().shape({
  plate: Yup.string().required(),
  color: Yup.string().required(),
  type: Yup.string().required(),
  brand: Yup.string().required(),
  model: Yup.string().required()
});

const emptyVehicle = {
  plate: '',
  color: '',
  type: '',
  brand: '',
  model: ''
};

const Form = ({vehicle, onSubmit, onDelete, saveLoading, deleteLoading, error}) => {
  const history = useHistory()
  return (
    <FormContainer>
      <Formik
        initialValues={vehicle || emptyVehicle}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({values, errors, touched, handleSubmit, setFieldValue}) => (
          <div className='form'>
            <Link onClick={() => history.push('/vehicles')}>
              <span>&larr; </span>Lista de vehículos
            </Link>
            <div className='header'>
              <h1>{vehicle ? 'Editar Vehículo' : 'Agregar Vehículo'}</h1>
            </div>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Input
                  name='type'
                  label='Tipo'
                  value={values.type}
                  onChange={setFieldValue}
                  error={Boolean(touched.type && errors.type)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name='plate'
                  label='Placa'
                  value={values.plate}
                  onChange={setFieldValue}
                  error={Boolean(touched.plate && errors.plate)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name='brand'
                  label='Marca'
                  value={values.brand}
                  onChange={setFieldValue}
                  error={Boolean(touched.brand && errors.brand)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name='model'
                  label='Modelo'
                  value={values.model}
                  onChange={setFieldValue}
                  error={Boolean(touched.model && errors.model)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name='color'
                  label='Color'
                  value={values.color}
                  onChange={setFieldValue}
                  error={Boolean(touched.color && errors.color)}
                />
              </Grid>
            </Grid>
            {Boolean(error) && <div className='error-message'><span>{error}</span></div>}
            <div className='buttons-container'>
              {Boolean(vehicle) && (
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
