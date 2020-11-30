import {useEffect} from 'react';
import {fetchVehicles} from 'services/vehicles';

import useSetState from './useSetState';

function useVehicles() {
  const [vehicles, setVehicles] = useSetState();

  useEffect(() => {
    setVehicles({
      fetching: true,
    });
    fetchVehicles()
      .then((response) => {
        setVehicles({
          data: response.data,
          loaded: true,
          fetching: false,
          error: null,
        });
      })
      .catch((error) => {
        setVehicles({
          data: null,
          loaded: true,
          fetching: false,
          error,
        });
      });
  }, []);

  return [vehicles, setVehicles];
}

export default useVehicles;
