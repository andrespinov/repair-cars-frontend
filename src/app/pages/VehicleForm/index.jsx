import React from 'react'
import { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Form from './components/Form'

const VehicleForm = () => {
  const loading = false
  const onSubmit = useCallback(() => {}, [])
  const error = ''

  const { id } = useParams()
  console.log(id)

  return (
    <div>
      <Form loading={loading} onSubmit={onSubmit} error={error} />
    </div>
  )
}

export default VehicleForm
