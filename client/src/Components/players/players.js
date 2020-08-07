import React, {useState, useEffect} from 'react'
import { getPlayers } from "../../redux/actions.js"
import { connect } from 'react-redux'
import "./players.css"

const Players = props => {
    useEffect(() => {
        props.getPlayers()
    }, [])
    console.log("players", props.players)

    return(
        <div className="player-body">
            <li>
                {props.players.map(p => {
                    return <ul>{p.Player}</ul>
                })}
            </li>
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