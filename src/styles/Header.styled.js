import styled from 'styled-components'
import { palette, typography, zindex } from '../constants/Styles'

export const Main = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${zindex.header};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 640px;
    min-width: 320px;
    height: 80px;
    padding: 1rem 3rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
`

export const WrapIcon = styled.button`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: ${palette.textPrimary}
`

export const HeaderValue = styled.div`
    flex: 1;
    text-align: center;
    font-size: ${typography.mainTitle}
`