import React from 'react';
import {Button} from '../Button'

Button.defaultProps.variant = 'primary'

const FilterButton = (props) => ( 

       <Button 
       m={2} 
       variant={(props.selectedSubFilter === '')? 'primary': (props.selectedSubFilter === props.name) ? 'active' : 'inactive'} 
       onClick={() => {
              props.selectFilterUpdate(props.selectedFilter,props.name);
              props.subfilter(props.name)
              }}
       >
       {props.name}
       </Button>
    
);

export default FilterButton;