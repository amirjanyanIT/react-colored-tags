import React, { useContext, useRef } from 'react'
import TagContainer from '../StyledElements/TagContainer'
import Context from '../Context'

const Tag = ({ tag, tagIndex, onTagClick }) => {
  const tagRef = useRef()
  const { tags, colors, onChange, setColorMenuOpen, styles } = useContext(
    Context
  )
  const { color, name } = tag

  const onDelete = () => {
    setColorMenuOpen(false)
    onChange(tags.filter((_tag, cIndex) => cIndex !== tagIndex))
  }

  const calcPosition = () => {
    let style = {}

    if (styles.tag) {
      style = {
        ...styles.tag
      }
    }

    style.backgroundColor = color
      ? colors.find((cColor) => cColor.name === color).color
      : colors[0].color

    return style
  }

  return (
    <TagContainer
      ref={tagRef}
      style={calcPosition()}
      onClick={(e) => {
        e.stopPropagation()
        onTagClick(e)
      }}
    >
      {name}
      <div
        className='delete-action'
        onClick={(e) => {
          e.stopPropagation()
          onDelete()
        }}
      >
        X
      </div>
    </TagContainer>
  )
}

export default Tag
