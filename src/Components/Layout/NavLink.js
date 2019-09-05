import styled from "styled-components";
import {NavLink} from 'react-router-dom'


const MyNavLink = styled(NavLink)`
  font-size: 0.8em;
  color: white;
   :focus {
       outline:none
   }
  `;

export {MyNavLink as NavLink}
