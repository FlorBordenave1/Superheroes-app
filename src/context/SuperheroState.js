import { useState } from "react";
import axios from "axios";
import SuperheroContext from "./SuperheroContext"

const SuperheroState = ({ children }) => {

    const [heroes, setHeroes] = useState([])

    const url = "https://gateway.marvel.com:443/v1/public/characters?limit=30&ts=1&apikey=a853dfd3f35d2abc23cd4b652aceceb5&hash=ec7e735399f75ee8c37d0616ac8e14a5";

    let orderHeroes;
    const getSuperheroes = async (order) => {
        try {
            const res = await axios.get(url);

            if (res.status === 200 || res.status === 201) {

                if (order === 'upward') {
                    orderHeroes = res.data.data.results.sort((a, b) => (a.name > b.name) ? 1 : -1)
                }

                if (order === 'falling') {
                    orderHeroes = res.data.data.results.reverse((a, b) => (a.name < b.name) ? 1 : -1)
                }
            }
        } catch (e) {
            console.log(e)
        }
        setHeroes(orderHeroes);
    };

    return (
        <SuperheroContext.Provider
            value={{
                heroes,
                getSuperheroes,
            }}
        >
            {children}
        </SuperheroContext.Provider>
    );
};
export default SuperheroState;
