import React, { useEffect,useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import PokemonGens from '../Services/PokemonGens';



const NavBar= () => {
    const [pokemonGen, setpokemonGen] = useState([]);

    useEffect(() => {

    const fetchPokemonGen= async () => {
        try {
            const response = await PokemonGens.GetPokemonGens();
            setpokemonGen(response.data.results)
            
        }catch (e){
            console.log(e)
        }
    }
        fetchPokemonGen()
        
    }, []);

  return (
    <div id='NavBar'>
        <Button className='button' variant="dark">accueil</Button>
         <img id="NavBar_Titre" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Logo"></img>

    <Dropdown className='button'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">Génération</Dropdown.Toggle>
        <Dropdown.Menu className='button'>
        {pokemonGen.map((type, index) => {
                return <Dropdown.Menu key={index} href={`/generation/${type.name}`}>
                  {type.name}
                </Dropdown.Menu>
        })}
        </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default NavBar;
