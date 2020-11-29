import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addVehicle, deleteVehicle, updateVehicle } from '../../../redux/vehicle/actions'
import ConfirmationDialog from '../../components/ConfirmationDialog'
import Form from './components/Form'

const VehicleForm = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const {vehicles, formLoading, formError} = useSelector((state) => state.vehicleReducer);
  const [vehicleToEdit, setVehicleToEdit] = useState(null);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  
  useEffect(() => {
    const vehicleWithId = id ? vehicles.find(vehicle => vehicle.id === id) : null
    setVehicleToEdit(vehicleWithId || null)
  }, [id, vehicles])
  
  const onSubmit = useCallback((vehicle) => {
    if (vehicleToEdit) {
      dispatch(updateVehicle(vehicle))
    } else {
      dispatch(addVehicle(vehicle))
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
        loading={formLoading}
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
