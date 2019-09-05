import React, {useState, Fragment} from 'react';
import FilterButton from './FilterButton'
import {Button} from '../Button'
import SideMenu from '../SideMenu'
import {filters,filterEntries} from './FiltersList'

Button.defaultProps.variant = 'primary'

const Filters = ({selectFilterUpdate}) => {

  const [filterTypes, setFilterTypes] = useState(filterEntries)  
  const [subFilters, setsubFilters] = useState([])  
  const [selectedFilter, setSelectedFilter] = useState('')
  const [selectedSubFilter, setSelectedSubFilter] = useState('')

  const selectFilter = (filter) => {
    setFilterTypes(
          filter ? [filter] : filterEntries,
      )
    setSelectedFilter(
          filter ? filter : ''
          )
    setsubFilters(
          filter ? Object.values(filters[filter]) : []
        )
  }

  const subfilter = (selected) => {
    setSelectedSubFilter(
     selected
    ) 
  }
  return ( 
  <Fragment>
    <SideMenu>
      <h4>filters:</h4>
    <Button variant='reset' m={2} onClick={
      ()=>{ 
        selectFilterUpdate();
        selectFilter();
        subfilter();
      
          }
      } > 
      Reset
      </Button> 
     { 
      filterTypes.map(filter=> (
        <Button  
        m={2} 
        key={filter[0]} 
        variant={  (!selectedFilter)? 'primary': (selectedFilter === filter) ? 'active' : 'inactive'} 
        onClick={()=> selectFilter(filter) } > 
        {filter}
        </Button> 
            ))
    } 
    {subFilters.map(subFilter=> (
      <FilterButton 
      key={subFilter} 
      name={subFilter} 
      selectedFilter={selectedFilter} 
      selectFilterUpdate={selectFilterUpdate} 
      selectedSubFilter={selectedSubFilter}
      subfilter={subfilter}
      /> 
    )
      )}
    </SideMenu>  
   
  </Fragment>  
)};

export default Filters;