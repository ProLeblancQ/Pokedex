import Card from 'react-bootstrap/Card';
import '../App.css';
import React, { useEffect, useState } from 'react';
import PokemonVersions from '../Services/PokemonVersions';
import { useParams } from 'react-router-dom';

import Pokemone from '../Components/Pokemon';


const VerPokemon = () => {
  const [verPokemon, setVerPokemon] = useState([]);
  const {versions} = useParams() 


  const fetchPokemonByIdgen = async () => {
      try {
          const response = await PokemonVersions.getVersionsById(versions);
          const resp = await PokemonVersions.getGroupesById(response.data.version_group.name);
          const res = await PokemonVersions.getGenerationsById(resp.data.generation.name);
          setVerPokemon(res.data.pokemon_species)

      } catch (e) {
          console.log(e)
      }
  }

  useEffect(() => {
    fetchPokemonByIdgen()
  }, []);

    return (
        <div className={"d-flex flex-wrap justify-content-center gap-2"}>
        {verPokemon.map(pokemon =>{
             return <Pokemone key={pokemon} pokemon={pokemon}/>
        })}
    </div>
    );
  }
export default VerPokemon ;