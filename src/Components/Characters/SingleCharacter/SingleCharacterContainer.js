import React, {Fragment} from 'react';
import Character from './Character'
import CharacterList from '../CharacterList'; 
import { compose } from "recompose"
import SideMenu from '../../Layout/SideMenu'
import {Loader} from '../../Layout/Loader'
import {SINGLE_CHARACTERS_QUERY, SAME_GENDER_QUERY} from '../../../queries'
import { graphql } from 'react-apollo'

const SingleCharacterContainer = ({SingleCharacter, SameGender}) =>  {
  
  if (SingleCharacter.loading || SameGender.loading ) return <div><Loader /></div>
  if (SingleCharacter.error || SameGender.error) return <div>Error</div>

  const removeCurrent = SameGender.characters.results.filter(result => result.id !== SingleCharacter.character.id )
  const shuffled = removeCurrent.sort(() => 0.5 - Math.random()).slice(0, 8);

   return (
    
<Fragment>
       <SideMenu />
       <Character {...SingleCharacter}  /> 
       <CharacterList characters={shuffled} colWidth={1/8}  /> 
</Fragment>
        )
 
    }

    const SingleQueryOptions = {
      name: 'SingleCharacter',
      options: props => ({
        variables: {
          id: props.match.params.id,
        },
      }),
    }

    const SameGenderOptions = { 
      name: 'SameGender',
      skip: ({ SingleCharacter }) => !SingleCharacter.character,
      options: ({ SingleCharacter }) => ({
          variables: {
             gender:  SingleCharacter.character.gender
          }
      })
  }

 export default compose(
  graphql(SINGLE_CHARACTERS_QUERY, SingleQueryOptions),
  graphql(SAME_GENDER_QUERY, SameGenderOptions)
)(SingleCharacterContainer)
 