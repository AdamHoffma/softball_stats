import React, { useState, useEffect } from 'react'
import { getPlayers } from "../../redux/actions.js"
import { connect } from 'react-redux'
import banner from "../../assets/banner.png"
import teamPhoto from "../../assets/16U.jpg"
import "./home.css"

const Home = props => {
    useEffect(() => {
        props.getPlayers()
    }, [])

    console.log("players", props.players)

    return(
        <div className="welcome">
            <h1 className="welcome-text">Welcome to the home of the Bandits!</h1>
            <img className="logo" src={banner} />
            <img className="team-photo" src={teamPhoto} />
        </div>
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
    )(Home)