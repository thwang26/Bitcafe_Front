import styled from 'styled-components'
import {
  palette,
  radius,
  typography,
  zindex,
} from '../../constants/Styles'
import {
  fadeIn,
  fadeOut,
  slideUpAnimation,
  slideDownAnimation
} from '../Animation.styled'

export const Container = styled.div`
  z-index: ${zindex.modal};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 640px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s ease-in-out;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 640px;
  height: calc(100% - 80px);
  background-color: ${palette.white};
  border-top-left-radius: ${radius.modal};
  border-top-right-radius: ${radius.modal};
  padding: 3rem 0;
  animation: ${({ open }) => (open ? slideUpAnimation : slideDownAnimation)} 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
`

export const ModalContent = styled.div`
  width: 100%;
  padding: 0rem 3rem;
  padding-bottom: 150px;
`

export const MenuName = styled.div`
  font-size: ${typography.mainTitle};
`

export const MenuOption = styled.div`
`

export const MenuPrice = styled.div`
  font-size: ${typography.mainTitle};
  font-weight: 600;
  margin: 10px
`

export const WrapIcon = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${palette.textPrimary};
    margin: 5px;
`

export const AddButton = styled.button`
  border-radius: ${radius.button};
  border-style: solid;
  border-color: ${palette.activeIcon};
  border-width: 1px;
  width: 70px;
  height: 40px;
  font-size: ${typography.content};
  color: ${palette.activeIcon};
  margin: 0px 5px 0px 5px;
`

export const OrderButton = styled.button`
  border-radius: ${radius.button};
  background-color: ${palette.activeIcon};
  width: 140px;
  height: 40px;
  font-size: ${typography.content};
  color: ${palette.white};
  margin: 0px 5px 0px 5px;
`

export const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zindex.bottomNavigation};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 150px;
  padding: 0px 30px 0px 30px;
`

export const ActiveWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const QtyPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`