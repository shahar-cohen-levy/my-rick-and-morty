import React, {useState, Fragment} from 'react';
import Title from '../Layout/Title'
import Filters from '../Layout/Filters/Filters'
import CharacterList from './CharacterList'
import Pager from '../Layout/Pager'
import {Loader} from '../Layout/Loader'

import { Query } from 'react-apollo'

import {CHARACTERS_QUERY} from '../../queries'



const CharactersContainer = () =>  {
   const [page, setPage] = useState(1)
   const [selectedFilter, setSelectedFilter] = useState({})
   
   const changePage = (next) => {
    setPage(next);
   }

   const selectFilterUpdate = (mainFilter, subfilter) => {
        setSelectedFilter({[mainFilter]:subfilter})
        setPage(1)
  }       
      
       return (
    
      <Fragment>
      <Filters selectFilterUpdate={selectFilterUpdate} />
      <Title>THE RICK AND MORTY APP</Title>
      <Query query={CHARACTERS_QUERY}
             variables={ {filter:selectedFilter, page: page} }
             
      >
        {({ loading, error, data }) => {
          if (loading) return  <div><Loader /></div>
          if (error) return <div>Error</div>
    
          const charactersToRender = data.characters.results
          const  {next, prev} = data.characters.info
          return (
            <div>
                
                 <CharacterList characters={charactersToRender} colWidth={1/4} showinfo /> 
                 <Pager  {...{next, prev}} changePage={changePage} style={{textAlign:'center'}}  />
                
            </div>
          )
        }}
      </Query>
      </Fragment >


       );
   
}

export default CharactersContainer;
