import { useState, useEffect, useContext } from "react";
import "./Menu.css";
//Material 
import Grid from "@material-ui/core/Grid";
//Components
import NavBar from "../../Componentss/Header/NavBar";
import CardSuperhero from "../../Componentss/Card/CardSuperhero";
import SuperheroContext from "../../context/SuperheroContext"


function Home() {

    const [personajesFav, setPersonajesFav] = useState([]);
    const [search, setSearch] = useState("");

    const superheroContext = useContext(SuperheroContext);

    const { heroes, getSuperheroes } = superheroContext;

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const searchingTerm = (search) => {
        return function (x) {
            const names = x.name.toLowerCase()
            return names.includes(search) || !search;
        };
    };

    const agregarUsuario = (personaje) => {
        setPersonajesFav((personajesFav) => [...personajesFav, personaje]);
        localStorage.setItem("personajesFavorito", JSON.stringify(personajesFav));
    };

    useEffect(() => {
        getSuperheroes('upward')
    }, [])

    return (
        <div>
            <NavBar
                onSearchChange={onSearchChange}
                getSuperheroes={getSuperheroes}
                value={search}
                to="/favorites"
                text='Favorites'
            />
            <div>
                <Grid container direction="row" justify="center" alignItems="center">
                    {heroes
                        .filter(searchingTerm(search))
                        .map((per, id) => (
                            <CardSuperhero
                                key={id}
                                img={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                                name={per.name}
                                isInteractive={true}
                                data={per}
                                onClick={agregarUsuario}
                            />
                        ))
                    }
                </Grid>
            </div>
        </div >
    );
}

export default Home;