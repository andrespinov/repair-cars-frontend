import useSetState from 'app/hooks/useSetState';
import React, {useEffect} from 'react';
import {fetchVehicles} from 'services/vehicles';

function VehiclesList() {
  const [vehicles, setVehicles] = useSetState();

  useEffect(() => {
    fetchVehicles().then((response) => {
      setVehicles({
        data: response.data,
        fetching: false,
        error: null,
        loaded: true,
      });
    });
  }, []);

  console.log(vehicles.data);

  return (
    <div>
      <h1>Vehicles List</h1>
    </div>
  );
}

export default VehiclesList;