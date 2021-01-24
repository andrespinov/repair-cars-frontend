import {useEffect} from 'react';
import {fetchOwners} from 'services/owners';

import useSetState from './useSetState';

function useOwners() {
  const [owners, setOwners] = useSetState();

  useEffect(() => {
    setOwners({
      fetching: true,
    });
    fetchOwners()
      .then((response) => {
        setOwners({
          data: response.data,
          loaded: true,
          fetching: false,
          error: null,
        });
      })
      .catch((error) => {
        setOwners({
          data: null,
          loaded: true,
          fetching: false,
          error,
        });
      });
  }, [setOwners]);

  return [owners, setOwners];
}

export default useOwners;
