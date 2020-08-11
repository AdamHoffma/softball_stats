import React, { useState, useEffect } from 'react'
import {getPlayers} from "../../redux/actions.js"
import { connect } from 'react-redux'
import {Link} from "react-router-dom"
import "./playerlist.css"

const PlayerList = props => {

    useEffect(() => {
        props.getPlayers()
    }, [])

    const players = props.players

    return(
        <div className="playerlistbody">
            <div className="playerlistinnerbody">
                <h1 className="playerlistheading">Click A Name To View Player Page</h1>
                <div className="playerlist">
                    {players.map(player => {
                        return <div className="playerdiv">
                                    <Link 
                                        to={`/player/${player.id}`} 
                                        className="link"
                                    >
                                        {player.Player}                                        
                                    </Link>
                               </div>
                    })}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, {getPlayers})(PlayerList)