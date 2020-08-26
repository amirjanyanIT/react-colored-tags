import React from 'react'

import DropDownContainer from '../StyledElements/DropDownContainer'

const DropDown = ({ toggleTarget, children, open }) => {
  if (!toggleTarget) {
    return null
  }

  const calcPosition = () => {
    /* basic variant */

    const vertical = toggleTarget.offsetTop + toggleTarget.clientHeight + 8
    const horizontal = toggleTarget.offsetLeft

    return {
      top: vertical,
      left: horizontal
    }
  }

  if (!open) {
    return null
  }

  return (
    <DropDownContainer
      style={{
        ...calcPosition()
      }}
    >
      {children}
    </DropDownContainer>
  )
}

export default DropDown
