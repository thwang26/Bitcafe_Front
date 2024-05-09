import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from '../styles/BottomNavigation.styled'
import useIcon from '../hooks/useIcon'
import { palette, icon } from '../constants/Styles'
import { GetPath } from '../utils/Utils'

const BottomNavigation = () => {
	const navigate = useNavigate()
	const { IcMain, IcOrder, IcCart, IcOthers } = useIcon()
	const [activeIcon, setActiveIcon] = useState()

	const handleIconClick = (nav) => {
			navigate(`/${nav}`)
	} // 아이콘 클릭 시 작동

	useEffect(() => {
        setActiveIcon(GetPath() || 'Home')
    }, [navigate]) // navigate 값이 바뀔 때 적용, path가 비어있으면 home

	const BOTTOM_NAVIGATION_MENU_LIST = [
		{
			title: 'Home',
			icon: <IcMain size={icon.bottomNavigation} color={activeIcon === 'Home' ? palette.activeIcon : palette.icon} />,
			navigate: ''
		},
		{
			title: 'Order',
			icon: <IcOrder size={icon.bottomNavigation} color={activeIcon === 'Order' ? palette.activeIcon : palette.icon} />,
			navigate: 'order'
		},
		{
			title: 'Cart',
			icon: <IcCart size={icon.bottomNavigation} color={activeIcon === 'Cart' ? palette.activeIcon : palette.icon} />,
			navigate: 'cart'
		},
		{
			title: 'Others',
			icon: <IcOthers size={icon.bottomNavigation} color={activeIcon === 'Others' ? palette.activeIcon : palette.icon} />,
			navigate: 'others'
		},
	]

	return (
		<S.Main>
			{BOTTOM_NAVIGATION_MENU_LIST.map(item => (
				<S.WrapIcon key={item.title} onClick={() => handleIconClick(item.navigate)}>
					{item.icon}
					<S.Text>{item.title}</S.Text>
				</S.WrapIcon>
			))}
		</S.Main>
	)
}

export default BottomNavigation