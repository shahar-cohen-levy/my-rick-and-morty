import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
  Card,
  Flex,
  Image,
  Heading,
  Text,
  } from 'rebass';
  import styled from "styled-components";
  import {selected} from '../Compare/CompareContainer'
  
  const HeadingShort = styled(Box)`
    text-overflow: ellipsis; 
    width: 220px; 
    white-space: nowrap; 
    overflow:hidden;
    `
const CharacterList = ({characters, compareButton, compareListUpdate, showinfo, colWidth}) => (
    <Flex flexWrap='wrap' mx={6}>
 {characters.map(character=> (
    <Box width={colWidth} key={character.id}>
    <Card
      m={2}
      p={1}
      borderRadius={2}
      boxShadow='0 0 16px rgba(0, 0, 0, .25)'
      bg={ 
        (selected.includes(character.id) && compareButton )? 
        '#F44336':''
      }
      
      >
    
     <Link 
     to={compareButton ? `/compare` : `/character/${character.id}`}
      >   
      {compareButton ?
      <Image src={character.image} onClick={() => compareListUpdate(character.id)} /> : 
      <Image src={character.image} 
      />
    }
     </Link>  
     
     {showinfo &&
      <HeadingShort px={2}>
        <Heading as='h3'>
        {character.name}
        </Heading>
        
        <Text fontSize={0}>
        I'm a {character.gender} {character.species} and I'm {character.status}
        </Text>
      </HeadingShort>
      }
    </Card>
  </Box>
))}
    </Flex>
   

)

export default CharacterList;
