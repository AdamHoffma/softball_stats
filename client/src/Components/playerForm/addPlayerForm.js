import React, {useState, useEffect} from 'react'
import { getPlayers, postPlayers, deletePlayers, editPlayer } from '../../redux/actions.js'
import { connect } from "react-redux";
import "./addPlayerForm.css"

const PlayerForm = ({getPlayers, postPlayers, deletePlayers, editPlayer, players}) => {
    const [values, setValues] = useState({
        Player: ""
    })

    useEffect(() => {
        getPlayers()           
    }, [getPlayers]) 

    
    const returnedPlayers = Array.from(players)
    
    console.log("returned", returnedPlayers)
    console.log("players", players)

    function handleChange(event) {        
        setValues({[event.target.name]: event.target.value})
    }       

    const submit = e => {   
        e.preventDefault()     
        postPlayers(values)        
    }   

    const removePlayer = p => {
        deletePlayers(p.id)
        const newArray = players.filter(person => person.id !== players.id)
        return newArray
    } 


    return(
        <div className="addplayerbody">
                <div className="addplayerinnerbody">
                    <h1 className="addplayerheading">Add Player To The Roster</h1>
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
                            <p className="delete" style={{color: "white"}}>Click A Name To Remove From Roster</p>            
                            <div className="buttonbody">
                            {returnedPlayers.map(p => {                                
                                return      <button
                                                key={p.id} 
                                                className="removebutton" 
                                                onClick={() => removePlayer(p)}
                                            >
                                                {p.Player}
                                            </button>                                        
                            })}
                            </div>
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

export default connect(mapStateToProps, {getPlayers, postPlayers, deletePlayers, editPlayer})(PlayerForm)