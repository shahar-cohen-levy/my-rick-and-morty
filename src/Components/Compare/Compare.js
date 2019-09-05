import React from 'react'
import { Flex,Image} from 'rebass';
import './styles.css'
import {Button} from '../Layout/Button'

const Compare = ({selectedcharacters,clear}) =>
<Flex flexWrap='wrap' mx={6}>

 
  <div className="row compare">
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th><Button onClick={()=>clear()}>Clear </Button></th>
            {selectedcharacters.map(character =>
              <th key={character.id}>
               <Image src={character.image} />
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Status</th>
            {selectedcharacters.map(character =>
              <td key={character.id} className={character.status === 'Dead' ? 'bg-red' : (character.status === 'Alive' ? 'bg-green': 'bg-grey')}>
              {character.status}
              </td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Gender</th>
            {selectedcharacters.map(character =>
              <td key={character.id} className={character.gender === 'Male' ? 'bg-red' : (character.gender === 'Female' ? 'bg-green': 'bg-grey')}>
              {character.gender}
              </td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Species</th>
            {selectedcharacters.map(character =>
              <td key={character.id} className={character.species === 'Human' ? 'bg-red' : (character.species === 'Alien' ? 'bg-green': 'bg-grey')}>
              {character.species}
              </td>
            )}
          </tr>
        
          
        </tbody>
      </table>
    </div>
  </div>
  </Flex>

export default Compare
