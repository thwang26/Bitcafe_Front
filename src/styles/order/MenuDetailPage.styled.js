import styled from 'styled-components'
import { palette, typography, radius, zindex } from '../../constants/Styles'

export const Container = styled.div`
  position: relative;
  border-top: 1px solid ${palette.divider};
  width: 640px;
  border: none;
  overflow: auto; /* 세로 스크롤바를 항상 표시하도록 설정 */
  padding-bottom: 80px; /* bottomnavigation의 높이만큼 여백 추가 */
`

export const MenuImage = styled.img`
  width: 50rem;
  height: 50rem;
  border-radius: ${radius.detailImage};
  object-fit: cover;
  margin: auto;
`

export const MenuItem = styled.div`
  width: 580px;
  margin: auto;
`

export const MenuContext = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px auto 30px auto;
`

export const MenuName = styled.div`
  font-size: ${typography.mainTitle}
`

export const MenuContent = styled.div`
  font-size: ${typography.desc};
  color: #ced4da;
`

export const MenuDescription = styled.div`
  font-size: ${typography.desc};
  text-align: left;
  margin: 10px auto 10px auto;
`

export const MenuPrice = styled.div`
  font-size: ${typography.mainTitle}
`

export const OrderButton = styled.button`
  border-radius: ${radius.button};
  background-color: ${palette.activeIcon};
  width: 580px;
  height: 40px;
  color: ${palette.white};
`

export const OrderWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${zindex.order};
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 640px;
    min-width: 320px;
    height: 80px;
    padding: 8px 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${palette.white};
    justify-content: center;
`