import React, { useState } from 'react'
import styled from 'styled-components'

import { ReactComponent as NeonSVG } from '../assets/rymdklubben_neon.svg'

const Wrapper = styled(NeonSVG)`
  opacity: ${props => props.opacity}
`

const NeonLogo = () => {
  const [opacity, setOpacity] = useState(1)
  const toggleLight = () => {
    setOpacity((opacity === 1 ? 0.3 : 1))
  }

  return <Wrapper opacity={opacity} onClick={toggleLight} />
}

export default NeonLogo
