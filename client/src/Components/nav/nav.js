import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
        paddingLeft: 105                                 
      },
    },
  }));

const Nav = () => {

const classes = useStyles();
const preventDefault = (event) => event.preventDefault();
    
    return (
        <Typography className={classes.root}>
            <Link href="#" onClick={preventDefault}>
                Players
            </Link>
            <Link href="#" onClick={preventDefault}>
                Photos
            </Link>
            <Link href="#" onClick={preventDefault}>
                Videos
            </Link>
            <Link href="#" onClick={preventDefault}>
                Schedule
            </Link>
            <Link href="#" onClick={preventDefault}>
                Contact
            </Link>                
        </Typography>
    )
}

export default Nav