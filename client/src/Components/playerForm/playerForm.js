import React, {useState, useEffect} from 'react'
import { getPlayers, postPlayers, deletePlayers, editPlayer } from '../../redux/actions.js'
import { connect } from "react-redux";
import "./playerForm.css"

const PlayerForm = props => {
    const [values, setValues] = useState({
        Player: ""
    })

    useEffect(() => {
        props.getPlayers()           
    }, []) 

    let players = props.players
        const returnedPlayers = Array.from(players)
    
    console.log("returned", returnedPlayers)
    console.log("players", players)

    function handleChange(event) {        
        setValues({[event.target.name]: event.target.value})
    }       

    const submit = e => {   
        e.preventDefault()     
        props.postPlayers(values)        
    }   

    const removePlayer = p => {
        props.deletePlayers(p.id)
        const newArray = props.players.filter(person => person.id != props.players.id)
        return newArray
    } 


    return(
        <div className="addplayerbody">
            <form className="addplayerform">
                <input
                    className="addplayer-input"
                    placeholder="Player Name"
                    name="Player"
                    value={players.Players}
                    onChange={handleChange}                    
                />                
                <button className="addplayer-button" onClick={(e) => submit(e)}>Add Player</button>         
            </form>
            <div className="player-delete">
                <p className="delete" style={{color: "white"}}>Delete Player</p>            
                {returnedPlayers.map(p => {
                    return <button onClick={() => removePlayer(p)}>{p.Player}</button>
                })}
            </div>                 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, {getPlayers, postPlayers, deletePlayers, editPlayer})(PlayerForm)