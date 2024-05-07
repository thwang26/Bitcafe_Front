import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as S from '../styles/Header.styled'
import useIcon from '../hooks/useIcon'
import { palette, icon } from '../constants/Styles'
import { GetPath } from './GetPath'

const Header = () => {
    const navigate = useNavigate()
	const { IcBack } = useIcon()
    const headerValue = GetPath()

    const handleBack = () => {
        navigate(-1) // 뒤로가기
    }

	return (
        <S.Main>
            <S.WrapIcon onClick={handleBack}>
                <IcBack size={icon.header} color={palette.icon}/>
            </S.WrapIcon>
            <S.HeaderValue>
                {headerValue}
            </S.HeaderValue>
        </S.Main>
	)
}

export default Header