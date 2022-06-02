import React from 'react';
import { GlobalWrapper } from '@main'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    values: [
      { name: 'black', value: '#000000' },
      { name: 'white', value: '#ffffff' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <GlobalWrapper>
      <Story />
    </GlobalWrapper>
  ),
]