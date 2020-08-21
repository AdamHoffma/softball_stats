import React, { useEffect } from 'react'
import {getPlayers, getPlayerById} from "../../redux/actions.js"
import {connect} from 'react-redux'
import "./playerpage.css"
import getPic from "../../utils/getPic.js"

const PlayerPage = ({getPlayerById, player, props}) => {

    useEffect(() => {
        getPlayerById(props.match.params.id)
    }, [getPlayerById, props.match.params.id])
    
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
                        <img alt="player" className="playerphoto" src={getPic(players.id)}/>
                        <div className="namebody">
                            <h1 className="playername">{players.Player}</h1>
                        </div>                        
                        <div className="biobody">
                            <h4>
                                About: {players.Player}
                            </h4>
                            <p className="bio">{players.bio}</p>
                        </div>
                    </section>
                    <section className='back'>
                        <h1 className="backplayername">{players.Player}</h1>
                            <table className="statstable">
                                <tr className="rowhead">
                                    <th className="tablehead">ABS</th>
                                    <th className="tablehead">PAS</th>
                                    <th className="tablehead">Walks</th>
                                    <th className="tablehead">KS</th>                                                                        
                                </tr>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.AB}</td>
                                    <td className="tabledata">{players.PA}</td>
                                    <td className="tabledata">{players.BB}</td>
                                    <td className="tabledata">{players.K}</td>                                    
                                </tr>
                            </table>
                            <table className="statstable">
                                <tr className="rowhead">
                                    <th className="tablehead">Hits</th>
                                    <th className="tablehead">Doubles</th>
                                    <th className="tablehead">Triples</th>
                                    <th className="tablehead">HRS</th>
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
                                    <th className="tablehead">SBS</th>
                                    <th className="tablehead">AVG</th>
                                    <th className="tablehead">OBP</th>
                                    <th className="tablehead">SLG</th> 
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