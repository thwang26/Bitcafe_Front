import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import BottomNavigation from '../../components/BottomNavigation'
import * as S from '../../styles/order/OrderPage.styled'
import axiosInstance from '../../utils/FetchCall'

const OrderPage = () => {
    const [categoryList, setCategoryList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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
            <Header />
            {isLoading && (
                <S.Container>
                    {categoryList.map((item, index) => (
                        <S.CategoryItem key={item.id} onClick={() => 
                            console.log(item.categoryName)
                            // TODO : 누르면 상세메뉴 노출
                        }>
                            <S.CategoryImage src={item.imagePath} />
                            <S.CategoryContext>
                                <S.CategoryName>{item.categoryName}</S.CategoryName>
                                <S.CategoryContent>{item.categoryContent}</S.CategoryContent>
                            </S.CategoryContext>
                        </S.CategoryItem>
                    ))}
                </S.Container>
            )}
        </>
    )
}

export default OrderPage