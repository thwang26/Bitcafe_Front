import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import * as S from '../styles/BottomNavigation.styled'
import useIcon from '../hooks/useIcon'
import { palette } from '../constants/Styles'

const BottomNavigation = () => {
	const navigate = useNavigate()
	const { IcMain, IcOrder, IcCart, IcOthers } = useIcon()
	const ICON_SIZE = 3

	const BOTTOM_NAVIGATION_MENU_LIST = [
		{
			title: 'Home',
			icon: <IcMain size={ICON_SIZE} color={palette.icon} />,
			navigate: ''
		},
		{
			title: 'Order',
			icon: <IcOrder size={ICON_SIZE} color={palette.icon} />,
			navigate: 'order'
		},
		{
			title: 'Cart',
			icon: <IcCart size={ICON_SIZE} color={palette.icon} />,
			navigate: 'cart'
		},
		{
			title: 'Others',
			icon: <IcOthers size={ICON_SIZE} color={palette.icon} />,
			navigate: 'others'
		},
	]

	const navigateTo = (pageName) => {
		navigate(`/${pageName}`)
	}

	return (
		<S.Main>
			{BOTTOM_NAVIGATION_MENU_LIST.map(item => (
				<S.WrapIcon key={item.title} onClick={() => navigateTo(item.navigate)}>
					{item.icon}
					<S.Text>{item.title}</S.Text>
				</S.WrapIcon>
			))}
		</S.Main>
	)
}

export default BottomNavigation