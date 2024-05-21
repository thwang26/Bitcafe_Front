import { useRecoilState } from 'recoil'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router"
import Header from '../../components/Header'
import * as S from '../../styles/order/MenuDetailPage.styled'
import axiosInstance from '../../utils/FetchCall'
import { formatPrice } from '../../utils/Utils'
import OrderModal from '../../components/order/OrderModal'

const MenuDetailPage = () => {
    const { state } = useLocation()
    const { menuId } = useParams()
    const [menu, setMenu] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
    const navigate = useNavigate()

    const getMenu = async () => {
        try {
            const res = await axiosInstance.get(`/api/menu/detail/${menuId}`)
            if (res.status === 200) {
                setMenu(res.data)
                setIsLoading(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <>
            <Header/>
            {isLoading && (
                <S.Container>
                    <S.MenuItem>
                        <S.MenuImage src={menu.imagePath} />
                        <S.MenuContext>
                            <S.MenuName>{menu.menuName}</S.MenuName>
                            <S.MenuContent>{menu.menuContent}</S.MenuContent>
                            <S.MenuDescription>{menu.menuDescription}</S.MenuDescription>
                            <S.MenuPrice>{formatPrice(menu.menuPrice)}</S.MenuPrice>
                        </S.MenuContext>
                    </S.MenuItem>
                    <S.OrderWrapper>
                        <S.OrderButton onClick={setIsOrderModalOpen}>
                            주문하기
                        </S.OrderButton>
                    </S.OrderWrapper>
                    {isOrderModalOpen && (
                        <OrderModal
                            setIsOrderModalOpen={setIsOrderModalOpen}
                            menuName={menu.menuName}
                            menuPrice={menu.menuPrice}
                        />
                    )}
                </S.Container>
            )}
        </>
    )
}

export default MenuDetailPage