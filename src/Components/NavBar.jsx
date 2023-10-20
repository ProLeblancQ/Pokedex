import React, { useEffect,useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import PokemonGens from '../Services/PokemonGens';
import PokemonVersions from '../Services/PokemonVersions';




const NavBar= () => {
    const [pokemonGen, setpokemonGen] = useState([]);
    const [pokemonVersion, setpokemonVersion] = useState([]);
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

    useEffect(() => {

      const fetchPokemonVersion= async () => {
          try {
              const response = await PokemonVersions.getVersions();
              setpokemonVersion(response.data.results)
              
          }catch (e){
              console.log(e)
          }
      }
          fetchPokemonVersion()
          
      }, []);

  return (
    <div id='NavBar'>
        <Button href='/' className='button' variant="dark">accueil</Button>
         <img id="NavBar_Titre" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="Logo"></img>

    <Dropdown className='button'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">Générations</Dropdown.Toggle>
      <Dropdown.Menu>
        {pokemonGen.map((type, index) => {
                return <Dropdown.Item key={index} href={`/generation/${type.name}`}>
                  {type.name}
                </Dropdown.Item>
              })}
          </Dropdown.Menu>
        </Dropdown>
          
        <Dropdown className='button'>
          <Dropdown.Toggle variant="dark" id="dropdown-basic2">Versions</Dropdown.Toggle>
      <Dropdown.Menu>
        {pokemonVersion.map((versions, index) => {
                return <Dropdown.Item key={index} href={`/versions/${versions.name}`}>
                  {versions.name}
                </Dropdown.Item>
              })}
          </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default NavBar;
