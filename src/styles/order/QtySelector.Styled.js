import styled from 'styled-components'
import { palette, typography } from '../../constants/Styles'

export const SelectorWrapper = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
    text-align: center;
`

export const WrapIcon = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${palette.textPrimary};
    margin: 5px;
`

export const Quantity = styled.div`
    width: 10px;
    margin: auto;
    font-size: ${typography.content};
    display: flex;
    justify-content: center;
`