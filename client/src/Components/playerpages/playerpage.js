import React, { useState, useEffect} from 'react'
import {getPlayers, getPlayerById} from "../../redux/actions.js"
import {connect} from 'react-redux'
import "./playerpage.css"
import banner from "../../assets/banner.png"
import brynlee from "../../assets/brynlee.jpeg"

const PlayerPage = props => {

    useEffect(() => {
        props.getPlayerById(props.match.params.id)
    }, [])
    console.log(props.player)
    const players = props.player

    const battingAverage = (players.Hits / players.AB).toFixed(3)
   
    const onBase = ((players.BB + players.Hits) / ( players.PA)).toFixed(3)

    const double = players.Double * 2
    const triple = players.Triple * 3
    const homerun = players.HR * 4

    const slugging = ((double + triple + homerun) / (players.AB)).toFixed(3)
    

    return (
        <div className="playerpagebody">
            <div className="playerpageinnerbody">
                <div className="card">
                    <section className="front">
                        <img className="playerphoto" src={brynlee}/>
                        <div className="namebody">
                            <h1 className="playername">{players.Player}</h1>
                        </div>                        
                        <div className="biobody">
                            <h4>Bio</h4>
                            <p className="bio">{players.bio}</p>
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
                                </tr>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.AB}</td>
                                    <td className="tabledata">{players.PA}</td>
                                    <td className="tabledata">{players.BB}</td>
                                    <td className="tabledata">{players.K}</td>
                                    <td className="tabledata">{players.KL}</td>
                                </tr>
                            </table>
                            <table className="statstable">
                                <tr className="rowhead">
                                    <th className="tablehead">Hits</th>
                                    <th className="tablehead">Doubles</th>
                                    <th className="tablehead">Triples</th>
                                    <th className="tablehead">Homeruns</th>
                                    <th className="tablehead">RBIS</th>                                                                      
                                </tr>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.Hits}</td>
                                    <td className="tabledata">{players.Double}</td>
                                    <td className="tabledata">{players.Triple}</td>
                                    <td className="tabledata">{players.HR}</td>
                                    <td className="tabledata">{players.RBI}</td>
                                </tr>
                            </table>
                            <table className="statstable">
                                <tr className="rowhead">                                    
                                    <th className="tablehead">Runs</th>
                                    <th className="tablehead">Stolenbases</th>
                                    <th className="tablehead">Batting Average</th>
                                    <th className="tablehead">On Base Percentage</th>
                                    <th className="tablehead">Slugging Percentage</th> 
                                </tr>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.R}</td>
                                    <td className="tabledata">{players.SB}</td>
                                    <td className="tabledata">{battingAverage}</td>
                                    <td className="tabledata">{onBase}</td>
                                    <td className="tabledata">{slugging}</td>
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