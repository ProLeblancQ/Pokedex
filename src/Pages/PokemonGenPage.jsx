import React, { useEffect, useState } from 'react';
import Pokemone from '../Components/Pokemon';
import PokemonGens from '../Services/PokemonGens';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';



const PokemonGenPage = () => {
    const {generation} = useParams();
    const [pokemonGen, setPokemonGen] = useState([]);

    const fetchPokemonGen= async () => {
        try {
            const response = await PokemonGens.GetPokemonGenById(generation);
            response.data.pokemon_species.sort((firstItem, secondItem) =>
                //Croissant
                firstItem.url.substring(41).replaceAll("/", "") -
                secondItem.url.substring(41).replaceAll("/", "")
            )
            console.log(response);
            setPokemonGen(response.data.pokemon_species)
            
        }catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetchPokemonGen()
        
    }, [generation]);

    return <div className={"d-flex flex-wrap justify-content-center gap-2"}>
        {pokemonGen.map(pokemon =>{
             return <Pokemone key={pokemon} pokemon={pokemon}/>
        })}
    </div>
}
 
export default PokemonGenPage;