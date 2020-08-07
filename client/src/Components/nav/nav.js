import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
//import { Link } from "react-router-dom";
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
        <Typography className={classes.root} >
            <Link className="link" href="/players" >
                Players
            </Link>
            <a><Link className="link" href="#" onClick={preventDefault}>
                Photos
            </Link></a>
            <Link className="link" href="#" onClick={preventDefault}>
                Videos
            </Link>
            <Link className="link" href="#" onClick={preventDefault}>
                Schedule
            </Link>
            <Link className="link" href="#" onClick={preventDefault}>
                Contact
            </Link>                
        </Typography>
    )
}

export default Nav