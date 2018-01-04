import {
  FETCHING_CRYPTO,
  FETCHING_CRYPTO_SUCCESS,
  FETCHING_CRYPTO_FAIL
} from './../types/CryptoTypes.js';

const initialState = {
  isFetching: false,
  data: null,
  hasError: false,
  errorMessage: null
};

export default function(state = initialState, action) {

    default:
        return state;

}
