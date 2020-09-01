import React, { useEffect } from 'react'
import {getPlayers, getPlayerById} from "../../redux/actions.js"
import {connect} from 'react-redux'
import "./playerpage.css"
import getPic from "../../utils/getPic.js"

const PlayerPage = (props, {getPlayerById, player}) => {

    useEffect(() => {
        props.getPlayerById(props.match.params.id)
    }, [getPlayerById])
    
    const players = props.player
    console.log("taga", players)

    const battingAverage = (players.Hits / players.AB).toFixed(3)   
    const onBase = ((players.BB + players.Hits) / ( players.PA)).toFixed(3)
    const double = players.Double * 2
    const triple = players.Triple * 3
    const homerun = players.HR * 4
    const slugging = ((double + triple + homerun) / (players.AB)).toFixed(3)
    

    return (
        <div className="playerpagebody">                     
            <div className="playerpageinnerbody">
                <div className="playercard">
                    <section className="front">
                        <img alt="player" className="playerphoto" src={getPic(players.Player)}/>
                        <div className="namebody">
                            <h1 className="playername">{players.Player}</h1>
                        </div>                        
                        <div className="biobody">                            
                            <p className="bio">{players.bio}</p>
                        </div>
                    </section>
                    <section className='back'>
                        <h1 className="backplayername">{players.Player}</h1>
                            <table className="statstable">
                                <tbody>
                                <tr className="rowhead">
                                    <th className="tablehead">AB</th>
                                    <th className="tablehead">PA</th>
                                    <th className="tablehead">BB</th>
                                    <th className="tablehead">K</th>                                                                        
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.AB}</td>
                                    <td className="tabledata">{players.PA}</td>
                                    <td className="tabledata">{players.BB}</td>
                                    <td className="tabledata">{players.K}</td>                                    
                                </tr>
                                </tbody>
                            </table>
                            <table className="statstable">
                                <tbody>
                                <tr className="rowhead">
                                    <th className="tablehead">H</th>
                                    <th className="tablehead">2B</th>
                                    <th className="tablehead">3B</th>
                                    <th className="tablehead">HR</th>
                                    <th className="tablehead">RBI</th>                                                                      
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.Hits}</td>
                                    <td className="tabledata">{players.Double}</td>
                                    <td className="tabledata">{players.Triple}</td>
                                    <td className="tabledata">{players.HR}</td>
                                    <td className="tabledata">{players.RBI}</td>
                                </tr>
                                </tbody>
                            </table>
                            <table className="statstable">
                                <tbody>
                                <tr className="rowhead">                                    
                                    <th className="tablehead">R</th>
                                    <th className="tablehead">SB</th>
                                    <th className="tablehead">AVG</th>
                                    <th className="tablehead">OBP</th>
                                    <th className="tablehead">SLG</th> 
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className="statsrow">
                                    <td className="tabledata">{players.R}</td>
                                    <td className="tabledata">{players.SB}</td>
                                    <td className="tabledata">{battingAverage}</td>
                                    <td className="tabledata">{onBase}</td>
                                    <td className="tabledata">{slugging}</td>
                                </tr>
                                </tbody>
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