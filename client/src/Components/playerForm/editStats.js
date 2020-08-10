import React, {useState, useEffect} from 'react'
import "./editStats.css"
import { getPlayers, postPlayers, deletePlayers, editPlayer } from '../../redux/actions.js'
import { connect } from "react-redux";
import players from '../players/players';

const EditStats = props => {    
    const [stat, setStat] = useState({
        PA: null
    })

    console.log("stat", stat)

    useEffect(() => {
        props.getPlayers()
    }, [])

    const changeHandler = event => {
        setStat({ [event.target.name]: event.target.value })
    }

    const stats = props.stats

    console.log("stats", stats)
    return (
        <div className="editbody">
            <div className="editinnerbody">
                <h1 className="editheading">Edit Player Stats</h1>
                {stats.map(player => {
                    return <div className="stats">
                                <p contentEditable="true">{player.Player}</p> 
                                <p contentEditable='true' onChange={changeHandler} name="PA" value={player.PA}>Plate Appearances:{player.PA}<button>edit</button></p>
                                <p contentEditable='true'>At Bats:{players.AB}</p>
                                <p contentEditable='true'>Walks:{players.BB}</p>
                                <p contentEditable='true'>Strikeouts:{players.AB}</p>
                                <p contentEditable='true'>Strikeouts Looking:{players.AB}</p>
                                <p contentEditable='true'>Hits:{players.AB}</p>
                                <p contentEditable='true'>Doubles:{players.AB}</p>
                                <p contentEditable='true'>Triples:{players.AB}</p>
                                <p contentEditable='true'>Homeruns:{players.AB}</p>
                                <p contentEditable='true'>Runs Batted In:{players.AB}</p>
                                <p contentEditable='true'>Runs Scored:{players.AB}</p>
                                <p contentEditable='true'>Stolenbases:{players.AB}</p> 
                           </div>
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        stats: state.players
    }
}

export default connect(mapStateToProps, {getPlayers, editPlayer})(EditStats)
