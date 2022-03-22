import "../../Pages/Dashboard/Menu.css";
//Material
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const CardSuperhero = ({ img, name, onClick, data, isInteractive }) => {

    return (
        <>
            <Card className="tarjeta" >
                <CardMedia
                    item={true.toString()}
                    xs={12}
                    className="imageCard"
                    component="img"
                    image={img}
                />
                <div className="buttonGrid">
                    <Grid
                        clitem={true.toString()}
                        className="containerName"
                    >
                        <Typography
                            style={{ fontFamily: 'Bebas-Bold' }}
                            variant="h5"
                        >
                            {name}
                        </Typography>
                    </Grid>
                    {
                        isInteractive ?
                            <Grid clitem={true.toString()} className="favoriteButton">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite />}
                                            name="checked"
                                            onClick={(e) => onClick(data)}
                                        />
                                    }
                                />
                            </Grid>
                            : null
                    }
                </div>
            </Card>
        </>
    )

}

export default CardSuperhero