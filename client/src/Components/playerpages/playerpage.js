import React, { useState, useEffect} from 'react'
import {getPlayers, getPlayerById} from "../../redux/actions.js"
import {connect} from 'react-redux'

const PlayerPage = props => {

    useEffect(() => {
        props.getPlayerById(props.match.params.id)
    }, [])
    console.log(props.player)
    const players = props.player

    return (
        <div className="playerpagebody">
            <div className="playerpageinnerbody">
                <div className="card">
                    <h1>{players.Player}</h1>
                </div>
            </div> 
        </div>
    )
}

const mapPropToState = state => {
    return {
        player: state.players
    }
}

export default connect(mapPropToState, { getPlayers, getPlayerById })(PlayerPage)