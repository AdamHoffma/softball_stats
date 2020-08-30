import React from 'react'
import "./admin.css"

const AdminNav = props => {
    return (
        <div className='adminouterbody'>
            <div className='admininnerbody'>
                <nav className='navbody'>
                    <a className="anchor" href="/addplayer">Add Player</a>
                    <a className="anchor" href="/editstats">Edit Player Stats</a>
                    <a className="anchor" href="/addevent">Add New Event</a>
                </nav>
            </div>
        </div>
    )
}

export default AdminNav