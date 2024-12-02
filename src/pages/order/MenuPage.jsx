import { useRecoilState } from 'recoil'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router"
import Header from '../../components/Header'
import * as S from '../../styles/order/MenuPage.styled'
import axiosInstance from '../../utils/FetchCall'
import { formatPrice } from '../../utils/Utils'
import StoreSelector from '../../components/store/StoreSelector'

const MenuPage = () => {
    const { state } = useLocation()
    const [menuList, setMenuList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { categoryId } = useParams()
    const navigate = useNavigate()

    const getMenuList = async () => {
        try {
            const res = await axiosInstance.get(`/api/menu/list/${categoryId}`)
            if (res.status === 200) {
                setMenuList(res.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(true)
        }
    }

    useEffect(() => {
        getMenuList()
    }, [])

    return (
        <>
            <Header value={state} />
            {isLoading && (
                <>
                    <S.Container>
                        {menuList.map((item) => (
                            <S.MenuItem key={item.id} onClick={() =>
                                navigate(`/order/menu/detail/${item.id}`, { state: item.menuName })
                            }>
                                <S.MenuImage src={item.imagePath} />
                                <S.MenuContext>
                                    <S.MenuName>{item.menuName}</S.MenuName>
                                    <S.MenuContent>{item.menuContent}</S.MenuContent>
                                    <S.MenuPrice>{formatPrice(item.menuPrice)}</S.MenuPrice>
                                </S.MenuContext>
                            </S.MenuItem>
                        ))}
                    </S.Container>
                    <S.StoreSelectorWrapper>
                        <StoreSelector />
                    </S.StoreSelectorWrapper>
                </>
            )}
        </>
    )
}

export default MenuPage