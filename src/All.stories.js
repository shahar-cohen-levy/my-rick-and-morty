import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Components/Layout/Title';
import { Button, Card, Image, Box, Heading,Text} from 'rebass'
import { Link } from 'react-router-dom';

storiesOf('Title', module)
  .add('with text', () => (
    <Title>Hello I'm a title</Title>
  )) 
storiesOf('Button', module)
  .add('primary', () => (
    <Button variant='primary' m={2}> I'm a primary button </Button>
  ))
  .add('reset', () => (
    <Button variant='reset' m={2}> I'm a reset button </Button>
  ))

  storiesOf('Card', module)
  .add('with image', () => (
    <Card
    m={2}
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
   
    <Image src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
   
    <Box px={2}>
      <Heading as='h3'>
      Rick Sanchez

      </Heading>
      <Text fontSize={0}>
      I'm a Male Human and I'm Alive
      </Text>
    </Box>
  </Card>
  ));
  