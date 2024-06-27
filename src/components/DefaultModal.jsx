import * as S from '../styles/DefaultModal.styled'

const DefaultModal = ({
  content,
  setIsDefaultModalOpen,
  modalEvent,
}) => {

  return (
    <S.ModalBackdrop onClick={() => setIsModalFalse()}>
      <S.Container onClick={e => e.stopPropagation()}>
        <S.Content>{content}</S.Content>
        <S.WrapButton>
          <S.Button onClick={() => setIsDefaultModalOpen(false)}>아니요</S.Button>
          <S.Button onClick={() => modalEvent()} $isActive>
            네
          </S.Button>
        </S.WrapButton>
      </S.Container>
    </S.ModalBackdrop>
  )
}


export default DefaultModal