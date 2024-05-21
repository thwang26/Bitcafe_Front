import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const fadeOut = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0.8);
  }
  to {
    background-color: rgba(0, 0, 0, 0);
  }
`

export const slideUpAnimation = keyframes`
  from {
    transform: translate(-50%, 100%);
  }
  to {
    transform: translate(-50%, -50%);
  }
`

export const slideDownAnimation = keyframes`
  from {
    transform: translate(-50%, -50%);
  }
  to {
    transform: translate(-50%, 100%);
  }
`