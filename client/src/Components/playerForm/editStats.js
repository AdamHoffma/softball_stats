import React, {useState, useEffect} from 'react'
import "./editStats.css"
import { getPlayers, editPlayer } from '../../redux/actions.js'
import { connect } from "react-redux";

const EditStats = ({getPlayers, editPlayer, stats}) => {    
    const [stat, setStat] = useState({})
    const [player, setPlayer] = useState({})      

    useEffect(() => {
        getPlayers()       
    }, [getPlayers])          

    const setPlayerId = button => {
        setPlayer({...button})
    }

    const changeHandler = event => {
        setStat({...stat, [event.target.name]: 
            event.target.type === "number" ? parseInt(event.target.value) 
            : event.target.value })
    }    
    console.log("stat", stats)

    const editButton = () => {
        editPlayer(player.id, stat)
    }
    
    return (
        <div className="editbody">
            <div className="editinnerbody">
                <h1 className="editheading">Edit Player Stats</h1>
                {stats.map(button => {
                    return <div>
                                <button 
                                    onClick={() => setPlayerId(button)}>
                                    {button.Player}
                                </button>
                           </div>
                })}
                <form>
                    <input
                        type="text"
                        placeholder='Name'
                        name="Player"
                        value={player.Player}                        
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder='ID'
                        name="ID"
                        value={player.id}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='AB'
                        name="AB"
                        value={stat.AB}
                        onChange={changeHandler}
                    />
                     <input
                        type="number"
                        placeholder='PA'
                        name="PA"
                        value={stat.PA}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='BB'
                        name="BB"
                        value={stat.BB}
                        onChange={changeHandler}
                    />
                     <input
                        type="number"
                        placeholder='K'
                        name="K"
                        value={stat.K}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='KL'
                        name="KL"
                        value={stat.KL}
                        onChange={changeHandler}
                    />
                     <input
                        type="number"
                        placeholder='Hits'
                        name="Hits"
                        value={stat.Hits}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='Double'
                        name="Double"
                        value={stat.Double}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='Triple'
                        name="Triple"
                        value={stat.Triple}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='HR'
                        name="HR"
                        value={stat.HR}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='RBI'
                        name="RBI"
                        value={stat.RBI}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='R'
                        name="R"
                        value={stat.R}
                        onChange={changeHandler}
                    />
                    <input
                        type="number"
                        placeholder='SB'
                        name="SB"
                        value={stat.SB}
                        onChange={changeHandler}
                    />
                    <input
                        type="text"
                        placeholder='Bio'
                        name="bio"
                        value={stat.bio}
                        onChange={changeHandler}
                    />                     
                    <button onClick={editButton}>Submit</button>
                </form>
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
