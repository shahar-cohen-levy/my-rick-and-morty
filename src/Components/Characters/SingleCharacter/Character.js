import React from 'react';
import Container from '../../Layout/Container';

import Title from '../../Layout/Title';
import {
    Box,
  Flex,
  Image,
  Card
  } from 'rebass'


const Character = ({character,location}) => (
  <Container>
    <Title>Hello my name is {character.name}!</Title>
  
 <Box>
  <Box
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Flex flexWrap='wrap'>
        <Box width={1/3}> 
    <Image src={character.image} borderRadius={200} />
    
    </Box>   
    <Box px={2} width={1/3}>
    <Image src={character.image} borderRadius={200} />
   
    
    </Box>
    <Box width={1/3}>
    <Image src={character.image} borderRadius={200} />
    <Card> 
    
    </Card> 
    </Box>
       I'm a {character.gender} {character.species} and I'm {character.status}. I'm from {location.name} which is {location.dimension} size and was created on {location.created} with 
       {location.residents.map(resident =>
        `, ${resident.name}`
        )}.
    </Flex>
  </Box>
</Box>
<Box p={1} m={2} >More {character.gender} characters</Box>
 </Container>
 
 )
 
 export default Character;