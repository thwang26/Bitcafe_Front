import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BottomNavigation from '../../components/BottomNavigation'
import axiosInstance from '../../utils/FetchCall'

const OrderPage = () => {
    const [categoryList, setCategoryList] = useState([])

    const getCategoryList = async () => {
        try {
            const res = await axiosInstance.get('/api/category/list')
            if (res.status === 200) {
                // setCategoryList(res.data.content)
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategoryList()
    }, [])

    return (
        <>
            {/* <Header /> */}
            {/* <S.Container>
            
            </S.Container> */}
            
            <BottomNavigation />
        </>
    )
}

export default OrderPage