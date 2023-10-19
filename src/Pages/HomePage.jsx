import React, { useEffect, useState } from 'react';
import Pokemon from '../Services/Pokemon';
import Pokemone from '../Components/Pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';



const HomePage = () => {
    const [pokemon, setPokemon] = useState([]);

    const fetchPokemon= async () => {
        try {
            const response = await Pokemon.GetPokemon();
            setPokemon(response.data.results)
            
        }catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPokemon()
        
    }, []);

    return <div className={"d-flex flex-wrap justify-content-center gap-2"}>
        {pokemon.map(pokemon =>{
             return <Pokemone pokemon={pokemon}/>
        })}
    </div>
}
 
export default HomePage;
