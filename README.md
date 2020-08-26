# react-colored-tags

> UI to create colored tags

[![NPM](https://img.shields.io/npm/v/react-colored-tags.svg)](https://www.npmjs.com/package/react-colored-tags) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-colored-tags
```

## Usage

```jsx
import React, { useState } from 'react'

import ColorTags from 'react-colored-tags'

const App = () => {
  const [tags, setTags] = useState([
    {
      name: 'Tag 1',
      color: 'custom_color_1'
    },
    {
      name: 'Tag 2',
      color: 'orange'
    },
    {
      name: 'Tag 3',
      color: 'custom_color_2'
    }
  ])
  
  return (
    <ColorTags
      tags={tags}
      onChange={(tags) => setTags(tags)}
      customColors={
        [
          {
            name: 'custom_color_1',
            color: 'rgb(87 196 218)'
          },
          {
            name: 'custom_color_2',
            color: 'rgb(85 109 251)'
          }
        ]
      }
      styles={{
        container: {
          maxWidth: '500px'
        },
        tag: {},
        colorDegustation: {}
      }}
    />
  )
}

export default App
```

## License

MIT © [AmirjanyanIT](https://github.com/AmirjanyanIT)
