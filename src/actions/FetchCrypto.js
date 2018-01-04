import axios from 'axios';
import { apiBaseURL } from './../utils/constants'
import {
  FETCHING_CRYPTO,
  FETCHING_CRYPTO_SUCCESS,
  FETCHING_CRYPTO_FAIL
} from './../types/CryptoTypes.js'

export default function FetchCrypto() {
    return dispatch => {

      dispatch({ type: FETCHING_CRYPTO })

      return axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .then(res => {
          dispatch({ type: FETCHING_CRYPTO_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: FETCHING_CRYPTO_FAIL, payload: err})
        })

    }
}
