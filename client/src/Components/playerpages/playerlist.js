import React, { useState, useEffect } from 'react'
import {getPlayers} from "../../redux/actions.js"
import { connect } from 'react-redux'

const PlayerList = props => {
    return(
        <div>Hi</div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps, {getPlayers})(PlayerList)