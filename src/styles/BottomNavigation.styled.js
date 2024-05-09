import styled from 'styled-components'
import { palette, typography } from '../constants/Styles'

export const Main = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    color: ${palette.textPrimary}
`

export const Text = styled.span`
    font-size: ${typography.content};
    margin-top: 0.5rem;
`