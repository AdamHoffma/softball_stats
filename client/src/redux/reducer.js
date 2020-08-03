import {
    GET_PLAYERS,
    GET_PLAYERS_SUCCESS,
    GET_PLAYERS_FAIL
} from "./actions.js"

const initialState = {
    error: "",
    fetchingData: false,
    players: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                fetchingData: true
            };
        case GET_PLAYERS_SUCCESS:
            return {
                ...state,
                players: action.payload
            }
        case GET_PLAYERS_FAIL:
            return {
                ...state,
                error: "Failed to retrieve players"
            } 
        default:
            return state       
    }
}

export default reducer