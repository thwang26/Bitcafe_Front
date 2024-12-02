import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import * as S from '../../styles/order/OrderPage.styled'
import axiosInstance from '../../utils/FetchCall'
import StoreSelector from '../../components/store/StoreSelector'

const OrderPage = () => {
    const [categoryList, setCategoryList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const getCategoryList = async () => {
        try {
            const res = await axiosInstance.get('/api/category')
            if (res.status === 200) {
                setCategoryList(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategoryList()
    }, [])

    useEffect(() => {
        setIsLoading(true)
    }, [categoryList])

    return (
        <>
            <Header value='Order' />
            {isLoading && (
                <>
                    <S.Container>
                        {categoryList.map((item) => (
                            <S.CategoryItem key={item.id} onClick={() =>
                                navigate(`/order/menu/${item.id}`, { state: item.categoryName })
                            }>
                                <S.CategoryImage src={item.imagePath} />
                                <S.CategoryContext>
                                    <S.CategoryName>{item.categoryName}</S.CategoryName>
                                    <S.CategoryContent>{item.categoryContent}</S.CategoryContent>
                                </S.CategoryContext>
                            </S.CategoryItem>
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

export default OrderPage