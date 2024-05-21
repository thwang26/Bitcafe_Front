import { useRef, useState } from 'react'
import * as S from '../../styles/order/OrderModal.styled'
import QtySelector from './QtySelector'
import useIcon from '../../hooks/useIcon'
import { palette, icon } from '../../constants/Styles'
import { useEffect } from 'react'
import { formatPrice } from '../../utils/Utils'

const OrderModal = ({
    setIsOrderModalOpen,
    menuName,
    menuPrice
}) => {
    const { IcExit, IcHeart } = useIcon()
    const [isOpen, setIsOpen] = useState(true)
    const timerRef = useRef(null);
    const [totalPrice, setTotalPrice] = useState(menuPrice)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (!isOpen) {
            timerRef.current = setTimeout(() => setIsOrderModalOpen(false), 200)
        }

        return () => clearTimeout(timerRef.current)
    }, [isOpen])

    const handleClickCounter = (num) => {
        setQuantity((prev) => prev + num)
        setTotalPrice((prev) => prev + menuPrice * num)
    }

    return (
        <>
            <S.Container open={isOpen}>
                <S.ModalWrapper open={isOpen}>
                    <S.ModalContent>
                        <S.WrapIcon onClick={() => { setIsOpen(false) }}>
                            <IcExit size={icon.modal} color={palette.icon} />
                        </S.WrapIcon>
                        <S.MenuName>{menuName}</S.MenuName>
                        <S.MenuOption>
                            여기에 옵션 들어갈 예정
                        </S.MenuOption>
                    </S.ModalContent>
                    <S.BottomWrapper>
                        <S.QtyPriceWrapper>
                            <QtySelector
                                quantity={quantity}
                                onClick={handleClickCounter}
                            />
                            <S.MenuPrice>
                                {formatPrice(totalPrice)}
                            </S.MenuPrice>
                        </S.QtyPriceWrapper>
                        <S.ActiveWrapper>
                            <S.WrapIcon>
                                <IcHeart size={icon.modal} color={palette.icon} />
                            </S.WrapIcon>
                            <S.ButtonWrapper>
                                <S.AddButton>담기</S.AddButton>
                                <S.OrderButton
                                    onClick={() => alert('아직 없어요')}
                                >주문하기</S.OrderButton>
                            </S.ButtonWrapper>
                        </S.ActiveWrapper>
                    </S.BottomWrapper>
                </S.ModalWrapper>
            </S.Container>
        </>
    )
}

export default OrderModal