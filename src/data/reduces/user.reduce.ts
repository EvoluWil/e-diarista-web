import { Dispatch, useReducer } from 'react';
import produce from 'immer';
import { City } from '@models/city.model';
import { User, UserType } from '@models/user.model';
import { Address } from '@models/address.model';

interface StateProps {
  user: User;
  logged: boolean;
  addressList: City[];
  userAddress: Address;
}

type Actions =
  | 'SET_USER'
  | 'SET_LOGGED'
  | 'SET_ADDRESS_LIST'
  | 'SET_USER_ADDRESS';

interface UserAction {
  type: Actions;
  payload: any;
}

export interface UserReducer {
  userState: StateProps;
  userDispatch: Dispatch<UserAction>;
}

const initialState: StateProps = {
  user: {
    fullName: '',
    birthDate: '',
    document: '',
    email: '',
    picture: '',
    phone: '',
    rating: 0,
    pixKey: '',
    userType: UserType.Cliente
  },
  addressList: [],
  userAddress: {
    address: '',
    district: '',
    city: '',
    state: '',
    zipCode: '',
    code: '',
    address2: '',
    number: ''
  },
  logged: false
};

const reducer = (state: StateProps, action: UserAction): StateProps => {
  const nextState = produce(state, draftState => {
    switch (action.type) {
      case 'SET_USER': {
        draftState.user = action.payload;
        draftState.logged = false;
        break;
      }
      case 'SET_ADDRESS_LIST': {
        draftState.addressList = action.payload;
        break;
      }
      case 'SET_USER_ADDRESS': {
        draftState.userAddress = action.payload;
        break;
      }
      case 'SET_LOGGED': {
        draftState.logged = action.payload;
        break;
      }
    }
  });
  return nextState;
};

export const useUserReducer = (): UserReducer => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    userState: state,
    userDispatch: dispatch
  };
};
