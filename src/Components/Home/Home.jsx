import "./Home.css";
import axios from "axios";
import { useState, useEffect, handleSubmit } from "react";
import { Link } from "react-router-dom";
// tarjeta
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
//favorito
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
//navbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import marvel from "../Imagenes/img/marvel.png";
//buscador
import InputBase from "@material-ui/core/InputBase";

const url =
  "https://gateway.marvel.com:443/v1/public/characters?limit=10&ts=1&apikey=a853dfd3f35d2abc23cd4b652aceceb5&hash=ec7e735399f75ee8c37d0616ac8e14a5";

function Home() {
  /*el setPersonajes lo estoy capturando en el useEffect, ahi, le pido el dato que necesito en este caso el nombre, le asigno ese nombre
    a personajes, y luego por cada personaje pinto por pantalla su tarjeta*/
  const [personajes, setPersonajes] = useState([]);

  /*capturo el estado del input*/
  const [busqueda, setBusqueda] = useState("");

  /*funcion llamada a la api con url que tiene el estado que capture */
  const handleSubmit = (e) => {
    const url2 = `https://gateway.marvel.com:443/v1/public/characters?name=${busqueda}&ts=1&apikey=a853dfd3f35d2abc23cd4b652aceceb5&hash=ec7e735399f75ee8c37d0616ac8e14a5`;
    e.preventDefault();
    axios
      .get(url2)
      .then((res) => {
        console.log(res);

        setPersonajes(
          res.data.data.results
        ); /*este set personaje contiene la url del personaje que estoy buscando..*/
      })
      .catch((error) =>
        console.log(error)
      ); /* por eso lo tengo que guardar en alguna parte, y lo guardo en la   */
  }; /* llamada a la api que me trae los usuarios con el boton buscar*/

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const aleatorio = res.data.data.results.sort(() => Math.random() - 0.5);
        setPersonajes(aleatorio);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(personajes);

  /*nuevo array para likes*/
  const [personajesFav, setPersonajesFav] = useState([]);

  const agregarUsuario = (personaje) => {
    console.log(personaje);
    setPersonajesFav((personajesFav) => [...personajesFav, personaje]);
    localStorage.setItem("personajesFavorito", JSON.stringify(personajesFav));
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="barra">
          <img src={marvel} className="imagen" alt="..." />
          <div>
            <form>
              <label>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="botonBuscarFav"
                >
                  Buscar...
                </button>
                <InputBase
                  type="text"
                  name="inputText"
                  className="input"
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <Link to="/favoritos">
                  <button className="botonBuscarFav">Favoritos</button>
                </Link>
              </label>
            </form>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          {personajes.map((per, id) => (
            <Card className="tarjeta" key={id}>
              <CardMedia
                item
                xs={12}
                className="imagenCard"
                component="img"
                image={`${per.thumbnail.path}.${per.thumbnail.extension}`}
              />
              <div className="buttonGrid">
                <Grid clitem xs={6} className="nombreSuperheroe">
                  <Typography variant="h5">{per.name}</Typography>
                </Grid>
                <Grid clitem className="botonFavorito">
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name="checkedH"
                        onClick={() => agregarUsuario(per)}
                      />
                    }
                  />
                </Grid>
              </div>
            </Card>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
