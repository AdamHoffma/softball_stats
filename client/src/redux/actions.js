import axios from "axios"

export const GET_PLAYERS = "GET_PLAYERS"
export const GET_PLAYERS_SUCCESS = "GET_PLAYERS_SUCCESS"
export const GET_PLAYERS_FAIL = "GET_PLAYERS_FAIL"

export const getPlayers = () => dispatch => {
    dispatch({type: GET_PLAYERS})
    axios
    .get("http://localhost:5000/api/stats")
    .then(res => {
        dispatch({type: GET_PLAYERS_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: GET_PLAYERS_FAIL, payload: error})
    })
}

export const POST_PLAYERS_START = "POST_PLAYERS_START"
export const POST_PLAYERS_SUCCESS = "POST_PLAYERS_SUCCESS"
export const POST_PLAYERS_FAILURE = "POST_PLAYERS_FAILURE"

export const postPlayers = player => dispatch => {
    dispatch({ type: POST_PLAYERS_START})    
    axios
    .post("http://localhost:5000/api/stats", player)
    .then(res => {
        dispatch({type: POST_PLAYERS_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: POST_PLAYERS_FAILURE, payload: error})
    })
  }


export const DELETE_PLAYERS_START = "DELETE_PLAYERS_START"
export const DELETE_PLAYERS_SUCCESS = "DELETE_PLAYERS_SUCCESS"
export const DELETE_PLAYERS_FAILURE = "DELETE_PLAYERS_FAILURE"

export const deletePlayers = player_id => dispatch => {
    dispatch({type: DELETE_PLAYERS_START})
    var confirmation = window.confirm("Are you sure?")
    if (confirmation === true) {
    axios
        .delete(`http://localhost:5000/api/stats/${player_id}`)
        .then(res => {
            window.location.reload()
        })
    } else {
        window.location.reload()
    }
}

export const EDIT_PLAYER = "EDIT_PLAYER"

export const editPlayer = player_id => dispatch => {
    dispatch({type: EDIT_PLAYER})
    axios
        .put(`http://localhost:5000/api/stats/${player_id}`)
        .then(res => {
            window.loctation.reload()
        })
}