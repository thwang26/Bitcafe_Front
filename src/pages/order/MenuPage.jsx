import { useRecoilState } from 'recoil'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router"
import Header from '../../components/Header'
import * as S from '../../styles/order/OrderPage.styled'
import axiosInstance from '../../utils/FetchCall'
import { formatPrice } from '../../utils/Utils'

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
        }
    }

    useEffect(() => {
        getMenuList()
    }, [])

    useEffect(() => {
        setIsLoading(true)
    }, [menuList])

    return (
        <>
            <Header value={state} />
            {isLoading && (
                <S.Container>
                    {menuList.map((item) => (
                        <S.CategoryItem key={item.id} onClick={() =>
                            navigate(`/order/menu/detail/${item.id}`, { state: item.menuName })
                        }>
                            <S.CategoryImage src={item.imagePath} />
                            <S.CategoryContext>
                                <S.CategoryName>{item.menuName}</S.CategoryName>
                                <S.CategoryContent>{item.menuContent}</S.CategoryContent>
                                <div>{formatPrice(item.menuPrice)}</div>
                            </S.CategoryContext>
                        </S.CategoryItem>
                    ))}
                </S.Container>
            )}
        </>
    )
}

export default MenuPage