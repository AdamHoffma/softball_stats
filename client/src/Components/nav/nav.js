import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import "./nav.css"



const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2)                                                       
      },
    },
  }));

const Nav = () => {

const classes = useStyles();
const preventDefault = (event) => event.preventDefault();
    
    return (
        <div className="nav">
        <Typography className={classes.root} >
            <Link className="link" href="/playerlist" >
                Players
            </Link>
            <Link className="link" href="#" onClick={preventDefault}>
                Photos
            </Link>
            <Link className="link" href="#" onClick={preventDefault}>
                Videos
            </Link>
            <Link className="link" href="/calendar">
                Schedule
            </Link>
            <Link className="link" href="/contact">
                Contact
            </Link>                
        </Typography>
        </div>
    )
}

export default Nav