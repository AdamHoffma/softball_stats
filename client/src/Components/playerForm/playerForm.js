import React, {useState, useEffect} from 'react'
import { getPlayers, postPlayers } from '../../redux/actions.js'
import { connect } from "react-redux";

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

    return(
        <div>
            <form
                onSubmit={submit}
            >
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                <input
                    label="Player"
                    value={values.Player}
                    onChange={handleChange("Player")}                    
                />
                
                <button onClick={submit}/>                
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, {getPlayers, postPlayers})(PlayerForm)