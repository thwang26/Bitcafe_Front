import styled from 'styled-components'
import { palette, typography, zindex } from '../../constants/Styles'

export const SelectorWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${palette.selector};
    cursor: pointer;
`

export const SelectedStoreWrapper = styled.div`
    width: 80%;
    border-bottom: 1px solid ${palette.white};
    margin-left: 30px;
    display: flex;
    justify-content: space-between;
`

export const SelectedStore = styled.div`
    font-size: ${typography.content};
    color: ${palette.white};
`


