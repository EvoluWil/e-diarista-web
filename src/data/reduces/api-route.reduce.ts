import produce from 'immer';
import { ApiRoute } from '@models/api-route.model';
import { Dispatch, useEffect, useReducer } from 'react';
import { ApiRoutesService } from '@services/api/api-route.service';

interface StateProps {
  apiRoutes: ApiRoute[];
}

interface ApiRouteAction {
  type: 'UPDATE';
  payload: any;
}

export interface ApiRouteReducer {
  apiRouteState: StateProps;
  apiRouteDispatch: Dispatch<ApiRouteAction>;
}

const initialState: StateProps = {
  apiRoutes: []
};

const reducer = (state: StateProps, action: ApiRouteAction): StateProps => {
  const nextState = produce(state, draftState => {
    switch (action.type) {
      case 'UPDATE': {
        draftState.apiRoutes = action.payload;
        break;
      }
    }
  });
  return nextState;
};

export const useApiRouteReducer = (): ApiRouteReducer => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    ApiRoutesService.getRoutes().then(routes =>
      dispatch({
        type: 'UPDATE',
        payload: routes
      })
    );
  }, []);

  return {
    apiRouteState: state,
    apiRouteDispatch: dispatch
  };
};
