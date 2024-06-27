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
  position: fixed;
  z-index: ${zindex.modal};
  top: 0;
  width: 640px;
  height: 100%;
  background-color: ${({ open }) => (open ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)')};
  animation: ${({ open }) => (open ? fadeIn : fadeOut)} 0.3s ease-in-out;
`

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(100%)')};
  display: flex;
  width: 640px;
  height: 97vh;
  background-color: ${palette.white};
  border-top-left-radius: ${radius.modal};
  border-top-right-radius: ${radius.modal};
  padding: 3rem 0;
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

export const StoreImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: ${radius.storeImage};
  object-fit: cover;
`

export const StoreItem = styled.div`
  width: 580px;
  margin: 10px auto 10px auto;
  display: flex;
  flex-direction: row;
`

export const StoreContext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StoreName = styled.div`
  font-size: 120%;
`

export const StoreAddress = styled.div`
  color: #ced4da;
`

export const StoreDistance = styled.div`
  margin: 10px
`