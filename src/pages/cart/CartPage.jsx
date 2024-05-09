import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BottomNavigation from '../../components/BottomNavigation'
import Header from '../../components/Header'

const CartPage = () => {
    return (
        <>
            <Header value='Cart' />
        </>
    )
}

export default CartPage