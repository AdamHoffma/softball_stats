import React, {useState, useEffect} from 'react'
import { getPlayers, postPlayers, deletePlayers, editPlayer } from '../../redux/actions.js'
import { connect } from "react-redux";
import "./playerForm.css"

const PlayerForm = props => {

    const [values, setValues] = useState({
        Player: "",
        PA: null,
        AB: null,
        BB: null,
        K: null,
        KL: null,
        Hits: null,
        Double: null,
        Triple: null,
        HR: null,
        RBI: null,
        R: null,
        SB: null,
        BA: null,
        SLG: null,
        OBP: null,
        OPS: null
    })

    function handleChange(event) {        
        setValues({[event.target.name]: event.target.value})
    }

    useEffect(() => {
        props.getPlayers()
    }, [])

    console.log("players", props.players)

    const submit = e => {   
        e.preventDefault()     
        props.postPlayers(values)        
    }   

    const removePlayer = p => {
        props.deletePlayers(p.id)
        const newArray = props.players.filter(person => person.id != props.players.id)
        return newArray
    }

    const edit = (p, stats) => {        
        props.editPlayer(p, stats)
    }
    console.log("values", values)

    const showForm = p => {
        var show = document.getElementById("hidden")
        show.classList.toggle("visible")
        console.log(p)                
    }

    return(
        <div>
            <form>
                <input
                    placeholder="Player Name"
                    name="Player"
                    value={values.Player}
                    onChange={handleChange}                    
                />                
                <button onClick={(e) => submit(e)}>Add Player</button>         
            </form>
            <div className="player-delete">
                <p style={{color: "white"}}>Delete Player</p>            
                {props.players.map(p => {
                    return <button onClick={() => removePlayer(p)}>{p.Player}</button>
                })}
            </div>
            {props.players.map(p => {
                return <div> 
                            <form>                                
                                <input 
                                    name="Player"
                                    type="text"
                                    style={{color: "red"}}
                                    placeholder={values.Player}
                                    label="Player"                            
                                    value={p.Player}
                                    onChange={handleChange}                                    
                                />
                                <label style={{color: "red"}}>Plate Appearances: {p.PA}
                                <input
                                    contentEditable="true"
                                    name="PA"                                    
                                    placeholder="Plate Appearances"
                                    label="PA"
                                    value={values.PA}
                                    onChange={handleChange}
                                />
                                </label>
                                <label style={{color: "red"}}>AT Bats: {p.AB}
                                <input
                                    placeholder="At Bats"
                                    label="AB"
                                    value={values.AB}
                                    onChange={handleChange}
                                />
                                </label>
                                <label style={{color: "red"}}>Walks: {p.Walks}
                                <input
                                    placeholder="Walks"
                                    label="BB"
                                    value={values.BB}
                                    onChange={handleChange}
                                />
                                </label>
                                <input
                                    placeholder="Strikeouts"
                                    label="K"
                                    value={values.K}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="Strikeouts Looking"
                                    label="KL"
                                    value={values.KL}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="Hits"
                                    label="Hits"
                                    value={values.Hits}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="Doubles"
                                    label="Double"
                                    value={values.Double}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="Triples"
                                    label="Triple"
                                    value={values.Triple}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="Homeruns"
                                    label="HR"
                                    value={values.HR}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="RBI"
                                    label="RBI"
                                    value={values.RBI}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="R"
                                    label="R"
                                    value={values.R}
                                    onChange={handleChange}
                                />
                                <input
                                    placeholder="Stolen Base"
                                    label="SB"
                                    value={values.SB}
                                    onChange={handleChange}
                                />                                                              
                                <button onClick={() => edit(p.id, values)}>Submit new stats</button>                      
                            </form>      
                                                                                                             
                        </div>
            })}
            
                      
                                           
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, {getPlayers, postPlayers, deletePlayers, editPlayer})(PlayerForm)