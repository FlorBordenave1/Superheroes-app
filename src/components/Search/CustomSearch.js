//materiel
import { makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@mui/icons-material/Search';

const CustomSearch = ({ onChange, value, placeholder, colorBackground }) => {

    const useStyles = makeStyles(() => ({
        input: {
            backgroundColor: colorBackground,
            width: '50vw',
            margin: 2,
            marginLeft: 0,
            padding: 11,
            color: "#000000",
            fontFamily: "Bebas-Bold",
            letterSpacing: 1,
        },
        container: {
            display: 'flex',
            alignItems: 'center',
        }
    }));
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <InputBase
                placeholder={placeholder}
                inputProps={{
                    className: classes.input,
                }}
                onChange={onChange}
                value={value}
            >
            </InputBase>
            <div style={{ margin: ' 4px 0px 0px -33px' }}>
                <SearchIcon />
            </div>
        </div>
    );
};

export default CustomSearch;