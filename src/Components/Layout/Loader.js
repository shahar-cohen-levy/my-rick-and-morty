import React from 'react';
import styled from "styled-components";

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

 const MyLoader = (props) => {
    return (
      <Loader type="Circles"  className={props.className} color="#F44336"  />

    )
 }

 const StyledLoader = styled(MyLoader)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    width: 100px;
 `

 export  {StyledLoader as Loader};
