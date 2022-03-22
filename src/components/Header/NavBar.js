import { Link } from "react-router-dom";
//Material
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//Components
import "../../Pages/Dashboard/Menu.css";
import CustomSearch from "../Search/CustomSearch";
import CustomButtom from "../Buttons/CustomButton";
//assets
import marvel from "../../assets/Img/marvel.png";

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'rgb(238, 96, 96)',
        fontSize: 'large',
        color: 'white',
        border: 'none',
        borderRadius: ' 0.5rem',
        height: '2.8rem',
        marginLeft: '1rem',
        fontFamily: 'Bebas-Bold',
        letterSpacing: 0.8,
        cursor: 'pointer'
    },
    barra: {
        backgroundColor: ' rgb(236, 29, 29)',
    },
    imagen: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        width: '11rem',
        height: '4rem',
        marginRight: ' 0.75rem',
    },
    containerButton: {
        display: 'flex',

    }
}));

const NavBar = ({ onSearchChange, value, to, text, getSuperheroes }) => {

    const classes = useStyles();

    return (

        <AppBar position="static">
            <Toolbar className={classes.barra}>
                <img src={marvel} className={classes.imagen} alt="..." />
                <div className={classes.container}>
                    <CustomSearch
                        colorBackground={'rgba(255, 255, 255, 0.57)'}
                        placeholder='search...'
                        onChange={(event) => onSearchChange(event)}
                        value={value}
                    />
                    <Link to={to}>
                        <button className={classes.button}>{text}</button>
                    </Link>
                </div>
                <div className={classes.containerButton}>
                    <CustomButtom text='a-z' onClick={() => getSuperheroes('upward')} />
                    <CustomButtom text='z-a' onClick={() => getSuperheroes('falling')} />
                </div>
            </Toolbar>
        </AppBar>

    );
}

export default NavBar;
