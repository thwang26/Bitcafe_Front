import { useRecoilState } from 'recoil'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router"
import Header from '../../components/Header'
import * as S from '../../styles/order/OrderPage.styled'
import axiosInstance from '../../utils/FetchCall'

const MenuDetailPage = () => {
    const { state } = useLocation()
    const { menuId } = useParams()
    const navigate = useNavigate()

    return (
        <>
            <Header value={state} />
            <div>helloworld!</div>
        </>
    )
}

export default MenuDetailPage