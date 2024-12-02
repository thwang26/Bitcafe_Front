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
  top: 0;
  width: 640px;
  height: 100vh;
  background-color: ${({ open }) => (open ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)')};
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s ease-in-out;
`

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(100%)')};
  display: flex;
  width: 640px;
  background-color: ${palette.white};
  animation: ${({ open }) => (open ? slideUpAnimation : slideDownAnimation)} 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
`

export const WrapIcon = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${palette.textPrimary};
  margin: 5px;
`

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 3rem;
`

export const Message = styled.div`
  font-size: ${typography.subTitle};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 3rem 3rem;
`

export const CartButton = styled.button`
  border-radius: ${radius.button};
  border-style: solid;
  border-color: ${palette.activeIcon};
  border-width: 1px;
  width: 210px;
  height: 40px;
  font-size: ${typography.content};
  color: ${palette.activeIcon};
  margin: 0px 5px 0px 5px;
`

export const OtherMenuButton = styled.button`
  border-radius: ${radius.button};
  background-color: ${palette.activeIcon};
  width: 210px;
  height: 40px;
  font-size: ${typography.content};
  color: ${palette.white};
  margin: 0px 5px 0px 5px;
`