import React, { useEffect } from 'react'
import { getPlayers } from "../../redux/actions.js"
import { connect } from 'react-redux'
import banner from "../../assets/banner.png"
import teamPhoto from "../../assets/16U.jpg"
import "./home.css"





const Home = ({getPlayers, players}) => {
    useEffect(() => {
        getPlayers()
    }, [getPlayers])


    console.log("players", players)

    return(
        <div className="home">            
            <div className="welcome">           
                <h1 className="welcome-text">Welcome to the home of the Bandits!</h1>
                <img alt="team logo" className="logo" src={banner} />
                <img alt="team" className="team-photo" src={teamPhoto} />
            </div>
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