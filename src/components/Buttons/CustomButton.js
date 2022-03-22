import { makeStyles } from "@material-ui/core";

const CustomButtom = ({ text, onClick }) => {

    const useStyles = makeStyles(() => ({
        button: {
            backgroundColor: 'rgb(238, 96, 96)',
            fontSize: 'large',
            color: 'white',
            border: 'none',
            borderRadius: ' 0.5rem',
            height: '2.8rem',
            minWidth: '3rem',
            margin: '0 0.5rem',
            fontFamily: 'Bebas-Bold',
            letterSpacing: 0.8,
            cursor: 'pointer'
        },

    }));

    const classes = useStyles();

    return (
        <button
            className={classes.button}
            onClick={() => onClick()}
        >
            {text}
        </button>
    )

}

export default CustomButtom