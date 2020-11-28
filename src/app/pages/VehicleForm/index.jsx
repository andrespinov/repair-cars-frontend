import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Form from './components/Form'

const VehicleForm = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const {vehicles, formLoading, formError} = useSelector((state) => state.vehicleReducer);
  const [vehicleToEdit, setVehicleToEdit] = useState(null);
  
  useEffect(() => {
    const vehicleWithId = id ? vehicles.find(vehicle => vehicle.id === id) : null
    setVehicleToEdit(vehicleWithId || null)
  }, [id, vehicles])
  
  const onSubmit = useCallback((vehicle) => {
    if (vehicleToEdit) {} else {}
  }, [vehicleToEdit, dispatch])

  return (
    <div>
      <Form
        vehicle={vehicleToEdit}
        loading={formLoading}
        onSubmit={onSubmit}
        error={formError}
      />
    </div>
  )
}

export default VehicleForm
