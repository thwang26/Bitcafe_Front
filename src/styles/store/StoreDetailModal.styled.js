import styled from 'styled-components'
import { palette, radius } from "../../constants/Styles";
import { slideInAnimation, slideOutAnimation } from "../Animation.styled";

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  display: flex;
  width: 640px;
  height: 97vh;
  background-color: ${palette.white};
  border-top-left-radius: ${radius.modal};
  border-top-right-radius: ${radius.modal};
  padding: 3rem 0;
  animation: ${({ open }) => (open ? slideInAnimation : slideOutAnimation)} 0.3s ease-in-out;
  flex-direction: column;
  align-items: center;
`