import styled from 'styled-components'
import { zindex } from '../constants/Styles'

export const Spinner = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: ${zindex.spinner};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`