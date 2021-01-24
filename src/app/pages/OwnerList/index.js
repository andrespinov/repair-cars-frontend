import React from 'react'

const owners = [
  {
    "id": 123,
    "name": "Juan Camilo",
    "last_name": "Morales",
    "dni": "123456",
    "email": "camilo@gmail.com",
    "phone_number": "123456",
    "created_at": "2020/09/12",
    "updated_at": "2020/09/13",
    "created_by": "m1l0",
    "updated_by": "jup4"
  }
]

function OwnerList() {
  return (
    <ul>
      {owners.map(owner => <li key={owner.dni}>{owner.name}</li>)}
    </ul>
  )
}

export default OwnerList