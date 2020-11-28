import { Formik } from 'formik'
import React from 'react'
import { Button, Input } from '../../../../components';
import { FormContainer } from './styles'
import * as Yup from 'yup';
import { Grid } from '@material-ui/core';


const validationSchema = Yup.object().shape({
  plate: Yup.string().required(),
  color: Yup.string().required(),
  type: Yup.string().required(),
  brand: Yup.string().required(),
  model: Yup.string().required(),
  author: Yup.string()
});

const emptyVehicle = {
  plate: '',
  color: '',
  type: '',
  brand: '',
  model: '',
  author: ''
}

const Form = ({onSubmit, loading, error}) => {
  return (
    <FormContainer>
      <Formik
        initialValues={emptyVehicle}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({values, errors, touched, handleSubmit, setFieldValue}) => (
          <div className="form">
            <div className="header">
              <h1>Iniciar sesión</h1>
            </div>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Input
                  name="type"
                  label="Tipo"
                  value={values.type}
                  onChange={setFieldValue}
                  error={Boolean(touched.type && errors.type)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name="plate"
                  label="Placa"
                  value={values.plate}
                  onChange={setFieldValue}
                  error={Boolean(touched.plate && errors.plate)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name="brand"
                  label="Marca"
                  value={values.brand}
                  onChange={setFieldValue}
                  error={Boolean(touched.brand && errors.brand)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name="model"
                  label="Modelo"
                  value={values.model}
                  onChange={setFieldValue}
                  error={Boolean(touched.model && errors.model)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name="color"
                  label="Color"
                  value={values.color}
                  onChange={setFieldValue}
                  error={Boolean(touched.color && errors.color)}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Input
                  name="author"
                  label="Autor"
                  value={values.author}
                  onChange={setFieldValue}
                  error={Boolean(touched.author && errors.author)}
                />
              </Grid>
            </Grid>
            {Boolean(error) && <div className='error-message'><span>{error}</span></div>}
            <Button
              className="form-button"
              title="Guardar"
              onClick={handleSubmit}
              loading={loading}
            />
          </div>
        )}
      </Formik>
    </FormContainer>
  );
};

export default Form;
