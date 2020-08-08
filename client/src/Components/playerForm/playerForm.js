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

    const handleChange = stats => event => {
        setValues({...values, [stats]: event.target.value})
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
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />                
                <button onClick={(e) => submit(e)}/>         
            </form>
            <div className="player-delete">            
                {props.players.map(p => {
                    return <button onClick={() => removePlayer(p)}>{p.Player}</button>
                })}
            </div>
            {props.players.map(p => {
                return <div> 
                            <p style={{color: "white"}}>Click name to edit stats</p>
                            <button key={p} onClick={() => showForm(p)}>{p.Player}</button>                                                      
                        </div>
            })}
            {props.players.map(p => {        
            return <div>
                        <form 
                        className="hidden"
                        id="hidden" 
                        type="submit"                                            
                        >
                        <input                            
                            value={p.id}
                            onChange={handleChange(p.Player)}
                        />
                        <input
                            placeholder="Plate Appearances"
                            label="PA"
                            value={values.PA}
                            onChange={handleChange("PA")}
                        />
                        <input
                            placeholder="At Bats"
                            label="AB"
                            value={values.AB}
                            onChange={handleChange("AB")}
                        />
                        <input
                            placeholder="Walks"
                            label="BB"
                            value={values.BB}
                            onChange={handleChange("BB")}
                        />
                        <input
                            placeholder="Strikeouts"
                            label="K"
                            value={values.K}
                            onChange={handleChange("K")}
                        />
                        <input
                            placeholder="Strikeouts Looking"
                            label="KL"
                            value={values.KL}
                            onChange={handleChange("KL")}
                        />
                        <input
                            placeholder="Hits"
                            label="Hits"
                            value={values.Hits}
                            onChange={handleChange("Hits")}
                        />
                        <input
                            placeholder="Doubles"
                            label="Double"
                            value={values.Double}
                            onChange={handleChange("Double")}
                        />
                        <input
                            placeholder="Triples"
                            label="Triple"
                            value={values.Triple}
                            onChange={handleChange("Triple")}
                        />
                        <input
                            placeholder="Homeruns"
                            label="HR"
                            value={values.HR}
                            onChange={handleChange("HR")}
                        />
                        <input
                            placeholder="RBI"
                            label="RBI"
                            value={values.RBI}
                            onChange={handleChange("RBI")}
                        />
                        <input
                            placeholder="R"
                            label="R"
                            value={values.R}
                            onChange={handleChange("R")}
                        />
                        <input
                            placeholder="Stolen Base"
                            label="SB"
                            value={values.SB}
                            onChange={handleChange("SB")}
                        />
                        <input
                            placeholder="Batting Average"
                            label="BA"
                            value={values.BA}
                            onChange={handleChange("BA")}
                        />
                        <input
                            placeholder="Slugging"
                            label="SLG"
                            value={values.SLG}
                            onChange={handleChange("SLG")}
                        />
                        <input
                            placeholder="OBP"
                            label="OBP"
                            value={values.OBP}
                            onChange={handleChange("OBP")}
                        />
                        <input
                            placeholder="OPS"
                            label="OPS"
                            value={values.OPS}
                            onChange={handleChange("OPS")}
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