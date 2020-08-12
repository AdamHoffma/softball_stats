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

    const battingAverage = players.Hits / players.AB
   
    const test = players.BB + players.Hits
    const test2 = test / players.PA

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
                        <h1 className="backplayername">{players.Player}</h1>
                            <table className="statstable">
                                <tr className="rowhead">
                                    <th className="tablehead">At Bats</th>
                                    <th className="tablehead">Plate Appearances</th>
                                    <th className="tablehead">Walks</th>
                                    <th className="tablehead">Strikeouts</th>
                                    <th className="tablehead">Struckout Looking</th>
                                    
                                    
                                    
                                    
                                    
                                    {/* <th className="tablehead">Runs</th>
                                    <th className="tablehead">Stolenbases</th>
                                    <th className="tablehead">Batting Average</th>
                                    <th className="tablehead">On Base Percentage</th>
                                    <th className="tablehead">Slugging Percentage</th> */}
                                </tr>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.AB}</td>
                                    <td className="tabledata">{players.PA}</td>
                                </tr>
                            </table>
                            <table className="statstable">
                                <tr className="rowhead">
                                    <th className="tablehead">Hits</th>
                                    <th className="tablehead">Doubles</th>
                                    <th className="tablehead">Triples</th>
                                    <th className="tablehead">Homeruns</th>
                                    <th className="tablehead">RBIS</th>
                                    <th className="tablehead">Hits</th>
                                    {/* <th className="tablehead">Doubles</th>
                                    <th className="tablehead">Triples</th>
                                    <th className="tablehead">Homeruns</th>
                                    <th className="tablehead">RBIS</th>
                                    <th className="tablehead">Runs</th>
                                    <th className="tablehead">Stolenbases</th>
                                    <th className="tablehead">Batting Average</th>
                                    <th className="tablehead">On Base Percentage</th>
                                    <th className="tablehead">Slugging Percentage</th> */}
                                </tr>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.Hits}</td>
                                    <td className="tabledata">{players.Double}</td>
                                </tr>
                            </table>                                              
                    </section>
                </div>               
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