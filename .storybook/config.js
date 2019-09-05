

import { configure, addDecorator } from "@storybook/react";
import Theme from './../src/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components'

const req = require.context("../src", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={Theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);