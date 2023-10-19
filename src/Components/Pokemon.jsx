import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import '../App.css';
import Pokemon from '../Services/Pokemon';
import React, { useEffect, useState } from 'react';

const Pokemons = ({pokemon}) => {
  const [currentPokemon, setCurrentPokemon] = useState({});


  const fetchPokemonById = async () => {
      try {
          const response = await Pokemon.GetPokemonById(pokemon.url.substring(41).replaceAll("/", ""))
          setCurrentPokemon(response.data)

      } catch (e) {
          console.log(e)
      }
  }

  useEffect(() => {
      fetchPokemonById()
  }, []);

    return (
      <div id='Cards'>
      <Card id="card"className={'col-3'}>
        <Card.Title class="row justify-content-center">{currentPokemon.names != undefined && currentPokemon.names[4].name.charAt(0).toUpperCase() + currentPokemon.names[4].name.substring(1)} #{currentPokemon.id}</Card.Title>
        <Card.Img id="card_img"variant="top" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+pokemon.url.substr(-3).replaceAll("/","")+".png"}/>
        <Card.Body>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
export default Pokemons ;