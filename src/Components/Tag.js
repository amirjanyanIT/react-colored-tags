import React, { useContext, useRef } from 'react'
import TagContainer from '../StyledElements/TagContainer'
import Context from '../Context'

const Tag = ({ tag, tagIndex, onTagClick, removable = true }) => {
  const tagRef = useRef()
  const {
    tags,
    colors,
    onChange,
    setColorMenuOpen,
    styles,
    onTagRemove
  } = useContext(Context)
  const { color, name } = tag

  const onDelete = () => {
    setColorMenuOpen(false)
    const removedTag = tags.find((_tag, cIndex) => tagIndex === cIndex)
    const filteredList = tags.filter((_tag, cIndex) => cIndex !== tagIndex)
    onChange(filteredList)
    onTagRemove(removedTag)
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
      {removable && (
        <div
          className='delete-action'
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
        >
          X
        </div>
      )}
    </TagContainer>
  )
}

export default Tag
