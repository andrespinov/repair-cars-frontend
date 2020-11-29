import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { addVehicle, deleteVehicle, updateVehicle } from '../../../redux/vehicle/actions'
import ConfirmationDialog from '../../components/ConfirmationDialog'
import Form from './components/Form'

const VehicleForm = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const history = useHistory();
  const {vehicles, saveLoading, deleteLoading, formError} = useSelector((state) => state.vehicleReducer);
  const {user} = useSelector((state) => state.authReducer);
  const [vehicleToEdit, setVehicleToEdit] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  
  useEffect(() => {
    const vehicleWithId = id ? vehicles.find(vehicle => vehicle.id == id) : null
    console.log(vehicleWithId)
    setVehicleToEdit(vehicleWithId || null)
  }, [id, vehicles])
  
  const onSubmit = useCallback((vehicle) => {
    const onSuccess = () => history.push('/vehicles')
    const payload = {
      ...vehicle,
      author: user
    }
    if (vehicleToEdit) {
      dispatch(updateVehicle(payload, onSuccess))
    } else {
      dispatch(addVehicle(payload, onSuccess))
    }
  }, [vehicleToEdit, dispatch])

  const onDelete = useCallback((confirm) => {
    if (confirm) {
      dispatch(deleteVehicle(vehicleToEdit.id))
    }
    setOpenConfirmDialog(false)
  }, [dispatch, vehicleToEdit])

  return (
    <div>
      <Form
        vehicle={vehicleToEdit}
        saveLoading={saveLoading}
        deleteLoading={deleteLoading}
        onSubmit={onSubmit}
        onDelete={() => setOpenConfirmDialog(true)}
        error={formError}
      />
      {Boolean(vehicleToEdit) && (
        <ConfirmationDialog
          open={openConfirmDialog}
          title='Eliminar Vehículo'
          description={`Está seguro que desea eliminar el vehículo de placa ${vehicleToEdit?.plate}?`}
          handleClose={onDelete}
        />
      )}
    </div>
  )
}

export default VehicleForm
