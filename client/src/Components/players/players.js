import React, {useState, useEffect} from 'react'
import { getPlayers } from "../../redux/actions.js"
import { connect } from 'react-redux'
import "./players.css"

const Players = props => {
    useEffect(() => {
        props.getPlayers()
    }, [])

    return(
        <div className="player-body">
            <h1>Hi</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(
    mapStateToProps,
    {
        getPlayers
    }
    )(Players)