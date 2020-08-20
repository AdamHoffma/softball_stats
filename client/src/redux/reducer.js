import {
    GET_PLAYERS,
    GET_PLAYERS_SUCCESS,
    GET_PLAYERS_FAIL,
    POST_PLAYERS_START,
    POST_PLAYERS_SUCCESS,
    POST_PLAYERS_FAILURE,
    DELETE_PLAYERS_START,
    EDIT_PLAYER,
    GET_PLAYER_ID,
    GET_PLAYER_ID_SUCCESS,
    ADD_EVENT,
    GET_EVENT
} from "./actions.js"

const initialState = {
    error: "",
    fetchingData: false,
    players: [],
    events: []
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
        case POST_PLAYERS_START:
            return {
                ...state
            } 
        case POST_PLAYERS_SUCCESS:
            return {
                ...state,
                players: action.payload
            }
        case POST_PLAYERS_FAILURE:
            return {
                ...state,
                error: "Failed to post player stats"
            }
        case DELETE_PLAYERS_START:
            return {
                ...state
            }
        case EDIT_PLAYER:
            return {
                ...state
            }
        case GET_PLAYER_ID:
            return {
                ...state,
                fetchingData: true
            }
        case GET_PLAYER_ID_SUCCESS:
            return {
                ...state,
                players: action.payload
            }
        case GET_PLAYERS_FAIL:
            return {
                ...state,
                error: "failed to get player"
            }
        case ADD_EVENT:
            return {
                ...state,
                events: action.payload
            }
        case GET_EVENT:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state       
    }
}

export default reducer