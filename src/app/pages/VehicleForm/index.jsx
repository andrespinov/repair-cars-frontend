import useSetState from 'app/hooks/useSetState';
import useVehicles from 'app/hooks/useVehicles';
import React, {useState} from 'react';
import { useSelector } from 'react-redux'
import {useHistory, useParams} from 'react-router-dom';
import {createVehicle, updateVehicle, deleteVehicle} from 'services/vehicles';

import ConfirmationDialog from '../../components/ConfirmationDialog'

import Form from './components/Form'

const VehicleForm = () => {
  const history = useHistory();
  const params = useParams();
  const [vehicles] = useVehicles();
  const [updateStatus, setUpdateStatus] = useSetState();
  const [deleteStatus, setDeleteStatus] = useSetState();

  const isEditMode = !!params.id;
  const vehicleToEdit = isEditMode
    ? vehicles.data?.find((vehicle) => vehicle._id === params.id)
    : null;

  const {user} = useSelector((state) => state.authReducer);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const onCreate = (vehicle) => {
    setUpdateStatus({ fetching: true });
    createVehicle({...vehicle, author: user}).then((response) => {
      if (response.ok) {
        setUpdateStatus({
          fetching: false,
          data: response.data,
          error: null
        })
        history.push('/vehicles');
      }
    }).catch(error => {
      setUpdateStatus({ error: error, fetching: false, data: null })
    })
  };

  const onUpdate = (vehicle) => {
    setUpdateStatus({ fetching: true });
    updateVehicle(vehicle).then((response) => {
      if (response.ok) {
        setUpdateStatus({
          fetching: false,
          data: response.data,
          error: null
        })
        history.push('/vehicles');
      }
    }).catch(error => {
      setUpdateStatus({ error: error, fetching: false, data: null })
    })
  };

  const onDelete = () => {
    setDeleteStatus({ fetching: true });
    deleteVehicle(vehicleToEdit._id).then((response) => {
      if (response.ok) {
        setDeleteStatus({
          fetching: false,
          data: response.data,
          error: null
        })
      }
      setOpenConfirmDialog(false);
      history.goBack();
    }).catch(error => {
      setDeleteStatus({ error: error, fetching: false, data: null })
    })
  };

  return (
    <div>
      <Form
        vehicle={vehicleToEdit}
        saveLoading={updateStatus.fetching}
        deleteLoading={deleteStatus.fetching}
        onSubmit={isEditMode ? onUpdate : onCreate}
        onDelete={() => setOpenConfirmDialog(true)}
        error={updateStatus.error}
      />
      {Boolean(vehicleToEdit) && (
        <ConfirmationDialog
          open={openConfirmDialog}
          title="Eliminar Vehículo"
          description={`Está seguro que desea eliminar el vehículo de placa ${vehicleToEdit?.plate}?`}
          handleClose={onDelete}
        />
      )}
    </div>
  );
};

export default VehicleForm
