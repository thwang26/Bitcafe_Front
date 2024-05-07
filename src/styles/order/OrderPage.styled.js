import styled from 'styled-components'
import { palette, typography } from '../../constants/Styles'

export const Container = styled.div`
  position: relative;
  height: calc(100vh - 9rem);
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${palette.divider};
  width: 640px;
  `

export const CategoryImage = styled.img`
  width: 13rem;
  height: 13rem;
  border-radius: 2rem;
  object-fit: cover;
`

export const CategoryItem = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: row;
`

export const CategoryContext = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CategoryName = styled.div`
  font-size: 120%;
`

export const CategoryContent = styled.div`
  color: #ced4da;
`