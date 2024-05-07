import styled from 'styled-components'
import { palette, typography } from '../constants/Styles'

export const Main = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba( 255, 255, 255, 0.2 );
    margin: 0 auto;
    max-width: 640px;
    min-width: 320px;
    height: 80px;
    padding: 8px 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
`

export const WrapIcon = styled.button`
    position: left;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    color: ${palette.textPrimary}
    &:hover {
        color: ${palette.hover}
    }
`

export const HeaderValue = styled.div`
    position: center;
    font-size: ${typography.mainTitle}
`