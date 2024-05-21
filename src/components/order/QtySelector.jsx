import { useState } from "react"
import useIcon from "../../hooks/useIcon"
import { palette, icon } from "../../constants/Styles"
import * as S from "../../styles/order/QtySelector.Styled"

const QtySelector = ({
    quantity, onClick
}) => {
    const { IcMinus, IcPlus } = useIcon()

    return (
        <>
            <S.SelectorWrapper>
                <S.WrapIcon
                    onClick={() => onClick(-1)}
                    aria-label='수량 내리기'
                    disabled={quantity === 1}
                >
                    <IcMinus size={icon.modal} color={quantity === 1 ? palette.disabledIcon : palette.icon} />
                </S.WrapIcon>
                <S.Quantity>{quantity}</S.Quantity>
                <S.WrapIcon
                    onClick={() => onClick(1)}
                    aria-label='수량 올리기'
                >
                    <IcPlus size={icon.modal} color={palette.icon} />
                </S.WrapIcon>
            </S.SelectorWrapper>
        </>
    )
}

export default QtySelector