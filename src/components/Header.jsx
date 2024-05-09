import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import * as S from '../styles/Header.styled'
import useIcon from '../hooks/useIcon'
import { palette, icon } from '../constants/Styles'

const Header = (props) => {
    const navigate = useNavigate()
	const { IcBack } = useIcon()
    const location = useLocation()

    const handleBack = () => {
        navigate(-1) // 뒤로가기
    }

    const isButtonDisabled = () => {
        const disabledPaths = ['/', '/order', '/cart', '/others'];
        return disabledPaths.includes(location.pathname);
    }

	return (
        <S.Main>
            {!isButtonDisabled() &&
            <S.WrapIcon onClick={handleBack}>
                <IcBack size={icon.header} color={palette.icon}/>
            </S.WrapIcon>
            }
            <S.HeaderValue>
                {props.value}
            </S.HeaderValue>
        </S.Main>
	)
}

export default Header