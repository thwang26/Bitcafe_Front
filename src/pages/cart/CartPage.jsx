import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import axiosInstance from '../../utils/FetchCall'
import * as S from '../../styles/cart/CartPage.styled'
import { formatPrice } from '../../utils/Utils'
import StoreSelector from '../../components/store/StoreSelector'
import QtySelector from '../../components/order/QtySelector'

const CartPage = () => {
    const [cartList, setCartList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const getCartList = async () => {
        try {
            const res = await axiosInstance.get('/api/cart')
            if (res.status === 200) {
                setCartList(res.data)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(true)
        }
    }

    useEffect(() => {
        getCartList()
    }, [])

    const handleClickCounter = (num) => {
        setQuantity((prev) => prev + num)
        setTotalPrice((prev) => prev + menuPrice * num)
    }

    return (
        <>
            <Header value='Cart' />
            <S.StoreSelectorWrapper>
                <StoreSelector />
            </S.StoreSelectorWrapper>
            {isLoading && (
                <S.Container>
                    {cartList.map((item) => (
                        <S.MenuItem key={item.id}>
                            <S.MenuImage src={item.imagePath} />
                            <S.MenuContext>
                                <S.MenuName>{item.menuName}</S.MenuName>
                                <S.MenuContent>{item.menuContent}</S.MenuContent>
                                <S.MenuPrice>{formatPrice(item.menuPrice)}</S.MenuPrice>
                            </S.MenuContext>
                            <S.QtyPriceWrapper>
                                <QtySelector
                                    quantity={item.qty}
                                    onClick={handleClickCounter}
                                />
                                <S.MenuPrice>
                                    {formatPrice(item.menuPrice)}
                                </S.MenuPrice>
                            </S.QtyPriceWrapper>
                        </S.MenuItem>
                    ))}
                </S.Container>
            )}
        </>
    )
}

export default CartPage