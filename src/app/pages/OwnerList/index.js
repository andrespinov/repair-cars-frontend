import { useRequest } from 'app/hooks/useRequest'
import React from 'react'
import { fetchOwners } from 'services/owners'

function OwnerList() {
  const { data } = useRequest({ service: fetchOwners })

  return (
    <ul>
      {data?.map(owner => <li key={owner.dni}>{owner.name}</li>)}
    </ul>
  )
}

export default OwnerList