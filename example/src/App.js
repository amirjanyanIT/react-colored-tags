import React, { useState } from 'react'

import ColorTags from 'react-colored-tags'

import './demo.css'

const App = () => {
  const [tags, setTags] = useState([
    {
      name: 'Tag 1',
      color: 'custom_color_1'
    },
    {
      name: 'Tag 3',
      color: 'custom_color_2'
    }
  ])
  
  return (
    <div className="container">
      <ColorTags
        tags={tags}
        onChange={(tags) => setTags(tags)}
        onTagRemove={(tag) => { console.log('Removed Tag:', tag) }}
        onTagChange={(tag) => { console.log('Changed Tag:', tag) }}
        onTagCreate={(tag) => { console.log('Created Tag:', tag) }}
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
            maxWidth: '500px',
            display: 'inline-block'
          },
          tag: {},
          colorDegustation: {},
          input: {}
        }}
      />
    </div>
  )
}

export default App
