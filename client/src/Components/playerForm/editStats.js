import React, {useState, useEffect} from 'react'
import "./editStats.css"
import { getPlayers, postPlayers, deletePlayers, editPlayer } from '../../redux/actions.js'
import { connect } from "react-redux";
import players from '../players/players';

const EditStats = props => {    
    const [stat, setStat] = useState([{}])

    console.log("stat", stat)

    useEffect(() => {
        props.getPlayers()
    }, [])    

    const stats = props.stats

    const changeHandler = event => {
        setStat({...stats, [event.target.name]: event.target.value })
    }

    const editButton

    console.log("stats", stats)
    return (
        <div className="editbody">
            <div className="editinnerbody">
                <h1 className="editheading">Edit Player Stats</h1>
                {stats.map(player => {
                    return <div className="stats">
                                <form>
                                    <input
                                        type="text"
                                        name="AB"
                                        value={stat.AB}
                                        onChange={changeHandler}
                                    />
                                    <button>Edit</button>
                                </form> 
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
