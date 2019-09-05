import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import CharactersContainer from './Components/Characters/CharactersContainer';
import CompareContainer from './Components/Compare/CompareContainer'
import SingleCharacterContainer from './Components/Characters/SingleCharacter/SingleCharacterContainer';
import Test from './Test'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
   <Router>
     <Switch>
     <Route exact path="/" component={CharactersContainer} />
     <Route exact path="/compare" component={CompareContainer} />
     <Route exact path="/test" component={Test} />
     <Route path="/character/:id" component={SingleCharacterContainer} />
     <Route  component={CharactersContainer} />
     </Switch>
   </Router>
   </ThemeProvider>
 );
}

export default Root;
