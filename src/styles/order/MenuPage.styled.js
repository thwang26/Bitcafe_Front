import styled from 'styled-components'
import { palette, typography, radius } from '../../constants/Styles'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${palette.divider};
  width: 640px;
  border: none;
  overflow: auto; /* 세로 스크롤바를 항상 표시하도록 설정 */
  padding-bottom: 80px; /* bottomnavigation의 높이만큼 여백 추가 */
`

export const MenuImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: ${radius.itemImage};
  object-fit: cover;
`

export const MenuItem = styled.div`
  width: 580px;
  margin: 10px auto 10px auto;
  display: flex;
  flex-direction: row;
`

export const MenuContext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MenuName = styled.div`
  font-size: 120%;
`

export const MenuContent = styled.div`
  color: #ced4da;
`

export const MenuPrice = styled.div`
  margin: 10px
`