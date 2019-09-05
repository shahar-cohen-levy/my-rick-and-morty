import styled from "styled-components";
import {Button} from 'rebass'


const MyButton = styled(Button)`
  font-size: 0.8em;
   :focus {
       outline:none
   }
  `;

export {MyButton as Button}

