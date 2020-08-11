import React, { useState, useEffect} from 'react'
import {getPlayers, getPlayerById} from "../../redux/actions.js"
import {connect} from 'react-redux'
import "./playerpage.css"
import banner from "../../assets/banner.png"

const PlayerPage = props => {

    useEffect(() => {
        props.getPlayerById(props.match.params.id)
    }, [])
    console.log(props.player)
    const players = props.player

    return (
        <div className="playerpagebody">
            <div className="playerpageinnerbody">
                <div className="card">
                    <section className="front">
                        <img className="playerphoto" src={banner}/>
                        <div className="namebody">
                            <h1 className="playername">{players.Player}</h1>
                        </div>                        
                        <div className="biobody">
                            <h4>Bio</h4>
                            <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </section>
                    <section className='back'>
                        <p>{players.SB}</p>
                    </section>
                </div>
                {/* <div className="card">
                    <section className="back">
                    <img className="playerphoto" src={banner}/>
                    <div className="namebody">
                        <h1 className="playername">{players.Player}</h1>
                    </div>
                    <div className="biobody">
                        <h4>Bio</h4>
                        <p className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    </section>
                </div>    */}
            </div> 
        </div>
    )
}

const mapPropToState = state => {
    return {
        player: state.players
    }
}

export default connect(mapPropToState, { getPlayers, getPlayerById })(PlayerPage)