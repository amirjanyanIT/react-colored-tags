import React, { useState, useRef, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

import defaultColors from './defaultColors'

import Container from './StyledElements/Container'
import ColorDegustation from './StyledElements/ColorDegustation'
import Input from './StyledElements/Input'

import Tag from './Components/Tag'
import DropDown from './Components/Dropdown'

import Context from './Context'

const ColorTags = ({
  tags = [],
  onChange = () => {},
  onTagRemove = () => {},
  onTagChange = () => {},
  onTagCreate = () => {},
  customColors = [],
  styles = {}
}) => {
  const inputRef = useRef()
  const [showInput, setShowInput] = useState(false)
  const [currentTagTarget, setCurrentTagTarget] = useState(null)
  const [currentTag, setCurrentTag] = useState(null)
  const [colorMenuOpen, setColorMenuOpen] = useState(false)

  const colors = [...customColors, ...defaultColors]

  const [newTag, setNewTag] = useState({
    name: '',
    color: colors[0].name
  })

  const onTagClick = ({ target }, tag, index) => {
    if (colorMenuOpen) {
      setColorMenuOpen(false)
    }
    setShowInput(false)
    setCurrentTagTarget(target)
    setCurrentTag({ tag, index })
    if (!colorMenuOpen) {
      setColorMenuOpen(true)
    }
  }

  const renderInput = () => {
    setColorMenuOpen(false)
    setShowInput(true)
  }

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus()
    }
  }, [showInput, inputRef])

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      if (newTag.name && showInput) {
        setShowInput(false)
        setNewTag({ ...newTag, name: '' })
        onChange([...tags, newTag])
        onTagCreate(newTag)
      }
    }
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        showInput && setShowInput(false)
        setColorMenuOpen(false)
      }}
    >
      <Context.Provider
        value={{
          colors,
          tags,
          onChange,
          setColorMenuOpen,
          styles,
          onTagRemove
        }}
      >
        <Container
          onClick={(e) => {
            e.stopPropagation()
            renderInput()
          }}
          style={styles.container}
          onKeyUp={(e) => onKeyUp(e)}
        >
          {tags.map((tag, index) => (
            <Tag
              tag={tag}
              key={`tag-${index}`}
              tagIndex={index}
              onTagClick={(e) => onTagClick(e, tag, index)}
            />
          ))}
          {showInput && (
            <Input
              ref={inputRef}
              value={newTag.name}
              style={styles.input || {}}
              onChange={({ target: { value } }) =>
                setNewTag({ ...newTag, name: value })
              }
            />
          )}
        </Container>

        {currentTagTarget && (
          <DropDown toggleTarget={currentTagTarget} open={colorMenuOpen}>
            {colors.map((color, index) => (
              <ColorDegustation
                key={index}
                style={{
                  backgroundColor: color.color,
                  ...styles.colorDegustation
                }}
                onClick={() => {
                  const modifiedTagsList = tags.map((tag, index) => {
                    if (index === currentTag.index) {
                      return {
                        ...tag,
                        color: color.name
                      }
                    }

                    return tag
                  })
                  onTagChange({
                    ...currentTag.tag,
                    color: color.name
                  })
                  onChange(modifiedTagsList)
                  setColorMenuOpen(false)
                }}
              />
            ))}
          </DropDown>
        )}
      </Context.Provider>
    </OutsideClickHandler>
  )
}

export default ColorTags
