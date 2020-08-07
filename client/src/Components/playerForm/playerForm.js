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

    const edit = p => {        
        props.editPlayer(p.id, values)
    }

    const showForm = () => {
        var show = document.getElementById("hidden")
        show.classList.toggle("visible")
    }

    return(
        <div>
            <form
                onSubmit={submit}
            >
                <input
                    placeholder="Player Name"
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />                
                <button onClick={(e) => submit(e)}/>         
            </form>            
                {props.players.map(p => {
                    return <button onClick={() => removePlayer(p)}>{p.Player}</button>
                })}
            {props.players.map(p => {
                return <div>
                            <p style={{color: "white"}}>Click name to edit stats</p>
                            <button onClick={showForm}>{p.Player}</button>
                            <form 
                                className="hidden"
                                id="hidden"
                                onClick={edit(p)}
                            >
                                <input
                                    value={p.id}
                                    onChange={handleChange()}
                                ></input>
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
                                <button onClick={() => edit(p)}>Submit new stats</button>
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