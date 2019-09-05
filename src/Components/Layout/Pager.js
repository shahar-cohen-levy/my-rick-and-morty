import React from 'react';
import {Button} from './Button'

Button.defaultProps.variant = 'primary'

const Pager = ({next, prev, changePage, style}) => ( 
    <div style={style}>
          { prev > 1 && '...'}
         { prev && 
       <React.Fragment>  
       <Button 
       m={2} 
       onClick={() => { changePage(prev);}}
       >
       {prev}
       </Button> 
       </React.Fragment>

    }
     { (next || prev) &&
    <Button variant='inactive'> {(next && prev)? (next+prev)/2 : prev+1} </Button>
     }
     { next && 
      <React.Fragment>
        
       <Button 
       m={2} 
       onClick={() => { changePage(next);}}
       >
       {next}
       </Button> ...
       </React.Fragment>
    }
    </div>
    
);

export default Pager;