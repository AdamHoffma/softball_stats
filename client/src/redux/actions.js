import axios from "axios"

export const GET_PLAYERS = "GET_PLAYERS"
export const GET_PLAYERS_SUCCESS = "GET_PLAYERS_SUCCESS"
export const GET_PLAYERS_FAIL = "GET_PLAYERS_FAIL"

export const getPlayers = () => dispatch => {
    dispatch({type: GET_PLAYERS})
    axios
    .get("http://localhost:5000/api/stats")
    .then(res => {
        dispatch({type: GET_PLAYERS_SUCCESS, payload: res})
    })
    .catch(error => {
        dispatch({type: GET_PLAYERS_FAIL, payload: error})
    })
}