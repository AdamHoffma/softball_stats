import React, { useState, useEffect } from 'react'
import { getPlayers } from "../../redux/actions.js"
import { connect } from 'react-redux'

const Test = props => {
    useEffect(() => {
        props.getPlayers()
    }, [])

    console.log("prop", props)

    return(
        <div></div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(
    mapStateToProps,
    {
        getPlayers
    }
    )(Test)