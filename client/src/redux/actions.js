import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth.js"

export const GET_PLAYERS = "GET_PLAYERS"
export const GET_PLAYERS_SUCCESS = "GET_PLAYERS_SUCCESS"
export const GET_PLAYERS_FAIL = "GET_PLAYERS_FAIL"

export const getPlayers = () => dispatch => {
    dispatch({type: GET_PLAYERS})
    axios
    .get("https://softballpage.herokuapp.com/api/stats")
    .then(res => {
        dispatch({type: GET_PLAYERS_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: GET_PLAYERS_FAIL, payload: error})
    })
}

export const GET_PLAYER_ID ="GET_PLAYER_ID"
export const GET_PLAYER_ID_SUCCESS = "GET_PLAYER_ID_SUCCESS"
export const GET_PLAYER_ID_FAIL = "GET_PLAYER_ID_FAIL"

export const getPlayerById = player_id => dispatch => {
    dispatch({type: GET_PLAYER_ID})
    axios
    .get(`https://softballpage.herokuapp.com/api/stats/${player_id}`)
    .then(res => {
        dispatch({type: GET_PLAYER_ID_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: GET_PLAYER_ID_FAIL, payload: error})
    })
}

export const GET_EVENT_ID = "GET_EVENT_ID"
export const GET_EVENT_ID_FAIL = "GET_EVENT_ID_FAIL"

export const getEventById = event_id => dispatch => {
    axios.get(`https://softballpage.herokuapp.com/api/schedule/${event_id}`)
    .then(res => {
        dispatch({type: GET_EVENT_ID, payload: res.data})
    })
    .catch(error => {
        dispatch({type: GET_EVENT_ID_FAIL, payload: error})
    })
}

export const POST_PLAYERS_START = "POST_PLAYERS_START"
export const POST_PLAYERS_SUCCESS = "POST_PLAYERS_SUCCESS"
export const POST_PLAYERS_FAILURE = "POST_PLAYERS_FAILURE"

export const postPlayers = player => dispatch => {
    dispatch({ type: POST_PLAYERS_START})    
    axiosWithAuth()    
    .post("/api/stats", player)
    .then(res => {
        console.log(res.status.json)
        dispatch({type: POST_PLAYERS_SUCCESS, payload: res.data})          
        window.location.reload()      
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
    var confirmation2 = window.confirm("This is permanent")}
    if (confirmation2 === true) {
    axiosWithAuth()
        .delete(`https://softballpage.herokuapp.com/api/stats/${player_id}`)
        .then(res => {
            window.location.reload()
        })
    } else {
        window.location.reload()
    }
}

export const EDIT_PLAYER = "EDIT_PLAYER"

export const editPlayer = (player_id, values) => dispatch => {
    dispatch({type: EDIT_PLAYER})
    axiosWithAuth()
        .put(`https://softballpage.herokuapp.com/api/stats/${player_id}`, values)
        .then(res => {
            console.log('res', res)            
        })
        .catch(error => {
            console.log("error", error)
        })
}

export const GET_EVENT= "GET_EVENT"

export const getEvent = () => dispatch => {
    axiosWithAuth()
        .get("https://softballpage.herokuapp.com/api/schedule")
        .then(res => {
            dispatch({type: GET_EVENT, payload: res.data})
        })
}

export const ADD_EVENT = "ADD_EVENT"

export const addEvent = newEvent => dispatch => {
    axiosWithAuth()
        .post("https://softballpage.herokuapp.com/api/schedule", newEvent)
        .then(res => {
            dispatch({type: ADD_EVENT, payload: res.data})
            window.alert("Event added")
        })
}

export const LOGIN = 'LOGIN'

export const Login = (user, redirect) => dispatch => {
    axios
        .post("https://softballpage.herokuapp.com/api/login", user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            redirect()
            dispatch({type: LOGIN, payload: res.data})
        })
        .catch(error => {
            console.log(error)
        })
}