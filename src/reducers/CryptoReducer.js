import {
  FETCHING_CRYPTO,
  FETCHING_CRYPTO_SUCCESS,
  FETCHING_CRYPTO_FAIL
} from './../types/CryptoTypes.js';

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null
};

export default function(state = initialState, action) {

  switch(action.type) {

    case FETCHING_CRYPTO:
      return Object.assign(state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      });

      case FETCHING_CRYPTO_FAIL:
        return Object.assign(state, {
          isFetching: false,
          data: null,
          hasError: true,
          errorMessage: action.payload
      });

      case FETCHING_CRYPTO_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          data: action.payload,
          hasError: false,
          errorMessage: null
        })


      default:
        return state;
  }
}
