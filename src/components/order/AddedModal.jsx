import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from '../../styles/order/AddedModal.styled'
import useIcon from '../../hooks/useIcon'
import { useEffect } from 'react'
import { icon, palette } from '../../constants/Styles'

const AddedModal = ({
    setisAddedModalOpen
}) => {
    const { IcExit } = useIcon()
    const [isOpen, setIsOpen] = useState(true)
    const timerRef = useRef(null);
    const navigate = useNavigate() 

    useEffect(() => {
        if (!isOpen) {
            timerRef.current = setTimeout(() => setisAddedModalOpen(false), 200)
        }

        return () => clearTimeout(timerRef.current)
    }, [isOpen])

    return (
        <>
            <S.Container open={isOpen}>
                <S.ModalWrapper open={isOpen}>
                    <S.MessageWrapper>
                        <S.Message>
                            장바구니에 추가되었습니다.
                        </S.Message>
                        <S.WrapIcon onClick={() => { setIsOpen(false) }}>
                            <IcExit size={icon.modal} color={palette.icon} />
                        </S.WrapIcon>
                    </S.MessageWrapper>
                    <S.ButtonWrapper>
                        <S.CartButton onClick={() => navigate("/cart")}>
                            장바구니 가기
                        </S.CartButton>
                        <S.OtherMenuButton onClick={() => navigate("/order")}>
                            다른 메뉴 더보기
                        </S.OtherMenuButton>
                    </S.ButtonWrapper>
                </S.ModalWrapper>
            </S.Container>
        </>
    )
}

export default AddedModal