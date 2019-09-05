import React from 'react';
import Title from '../Layout/Title'
import CharacterList from '../Characters/CharacterList'
import Compare from './Compare'
import Pager from '../Layout/Pager'
import Filters from '../Layout/Filters/Filters'
import {Loader} from '../Layout/Loader'
import {CHARACTERS_QUERY} from '../../queries'
import { Query } from 'react-apollo'

export let selected = [0]

class CompareContainer extends React.Component  {

       state = { 
           characters: [],
           selectedCharacters: [],
           page:1,
           selectedFilter:{}
    }
   
   changePage = (next) => {
    this.setState({
        page: next
    }
        );
   }

   selectFilterUpdate = (mainFilter, subfilter) => {
    this.setState({
        selectedFilter: {[mainFilter]:subfilter},
        page: 1
    });
}

   clearCompared = () => {
    this.setState({
      selectedCharacters: [],
    });
    selected = [0]
   }


   compareListUpdate = (selectedID) => {
    if (!selectedID) return
    selected.indexOf(selectedID) === -1 ? 
    selected.push(selectedID) : 
    selected.splice(selected.indexOf(selectedID), 1);
     
    fetch(`https://rickandmortyapi.com/api/character/${selected}`)
    .then(response => response.json())
    .then(data => {
        this.setState({
            selectedCharacters: data,
        });
    });
  }
   render() {
       const {selectedFilter} = this.state
       return (
    
      <React.Fragment>
      <Filters selectFilterUpdate={this.selectFilterUpdate} />

      <Title>Compare</Title>
      <Query query={CHARACTERS_QUERY}
             variables={ {filter:selectedFilter, page: this.state.page} }
             
      >
        {({ loading, error, data }) => {
          if (loading) return <div><Loader /></div>
          if (error) return <div>Error</div>
    
          const charactersToRender = data.characters.results
          const  {next, prev} = data.characters.info
          return (
            <div>
                 <CharacterList 
                 characters={charactersToRender} 
                 colWidth={1/10}
                 compareListUpdate={this.compareListUpdate} 
                 compareButton
       /> 
                 <Pager  {...{next, prev}} changePage={this.changePage} style={{textAlign:'center'}}  />

                
                
            </div>
          )
        }}
      </Query>

       {selected.length >2 &&
      <Compare selectedcharacters={this.state.selectedCharacters} clear={this.clearCompared} />
       }

       
      </React.Fragment >


       );
   }
}

export default CompareContainer;
