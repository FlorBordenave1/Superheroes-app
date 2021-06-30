import "./Likes.css";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// tarjeta
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//navbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import marvel from "../Imagenes/img/marvel.png";

const Likes = () => {
  const [favoritosList, setFavoritosList] = useState([]);
  const traerLocStor = () => {
    const personajes = JSON.parse(localStorage.getItem("personajesFavorito"));
    setFavoritosList(personajes);
    console.log(favoritosList);
  };
  useEffect(() => {
    traerLocStor();
  }, []);
  return (
    <div>
      <AppBar>
        <Toolbar className="barra">
          <img src={marvel} className="imagen" alt="..." />
          <Link to="/">
            <button className="botonInicio">Inicio</button>
          </Link>
        </Toolbar>
      </AppBar>
      <div className="espaciado"></div>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          {favoritosList.length &&
            favoritosList.map((per) => (
              <Card className="tarjeta">
                <CardMedia
                  item
                  xs={12}
                  className="imagenCard"
                  component="img"
                  image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                ></CardMedia>
                <div lassName="buttonGrid">
                  <Grid clitem xs={6} className="nombreSuperheroe">
                    <Typography variant="h5">{per.name}</Typography>
                  </Grid>
                </div>
              </Card>
            ))}
        </Grid>
      </div>
    </div>
  );
};
export default Likes;
