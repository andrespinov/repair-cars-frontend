import {useReducer} from 'react';

function useSetState() {
  const [state, setState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      data: null,
      loaded: false,
      fetching: false,
      error: null,
    },
  );
  return [state, setState];
}

export default useSetState;
