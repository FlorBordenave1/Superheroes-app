import "./Likes.css";
import { useState, useEffect } from "react";
// material 
import Grid from "@material-ui/core/Grid";
//components
import NavBar from "../../Componentss/Header/NavBar";
import CardSuperhero from "../../Componentss/Card/CardSuperhero";

const Likes = () => {

  const [favoritosList, setFavoritosList] = useState([]);
  const [search, setSearch] = useState("");

  const traerLocStor = () => {
    const personajes = JSON.parse(localStorage.getItem("personajesFavorito"));
    setFavoritosList(personajes);
  };

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const searchingTerm = (search) => {
    return function (x) {
      return x.name.includes(search) || !search;
    };
  };

  useEffect(() => {
    traerLocStor();
  }, []);

  return (
    <div>

      <NavBar
        onSearchChange={onSearchChange}
        value={search}
        to="/"
        text='home'
      />

      <div>
        {favoritosList && favoritosList.length > 0 ?
          <Grid container direction="row" justify="center" alignItems="center">
            {favoritosList.length &&
              favoritosList
                .filter(searchingTerm(search))
                .map((per, id) => (
                  <CardSuperhero
                    data={per}
                    key={id}
                    id={id.toString()}
                    img={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                    name={per.name}
                    isInteractive={false}
                  />
                ))}
          </Grid> :
          <h1 className="textAlert" >you don't have favourites</h1>
        }
      </div>
    </div>
  );
};
export default Likes;
