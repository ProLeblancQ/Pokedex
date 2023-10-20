import Card from 'react-bootstrap/Card';
import '../App.css';
import PokemonGens from '../Services/PokemonGens';
import React, { useEffect, useState } from 'react';

const GenPokemon = ({generation}) => {
  const [currentPokemonGen, setCurrentPokemonGen] = useState({});


  const fetchPokemonByIdgen = async () => {
      try {
          const response = await PokemonGens.GetPokemonGenById(generation)
          setCurrentPokemonGen(response.data.pokemon_species)

      } catch (e) {
          console.log(e)
      }
  }

  useEffect(() => {
    fetchPokemonByIdgen()
  }, [generation]);

    return (
      <div id='Cards'>
        {currentPokemonGen.map((pokemon, index) =>{
      <Card id="card"className={'col-3'} key={index}>
        <Card.Title class="row justify-content-center">{currentPokemonGen.names != undefined && currentPokemonGen.names[4].name.charAt(0).toUpperCase() + currentPokemonGen.names[4].name.substring(1)} #{currentPokemonGen.id}</Card.Title>
        <Card.Img id="card_img"variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemon.url.substr(-3).replaceAll("/","")+".png"}/>
        <Card.Body>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
      })}
      </div>
    );
  }
export default GenPokemon ;